<script>
    import { supabase } from "$lib/supabase";
    import { Container, Col, Row } from '@sveltestrap/sveltestrap';
    import GuestBook from './GuestBook.svelte';
    import ServerLog from './ServerLog.svelte';
    import Center from './Center.svelte';

    let guestBooks = [];
    let serverLogs = [];
    $: guestBooks;
    $: serverLogs;

    async function getGuestBook() {
        let { data: GUEST_BOOK, error } = await supabase
            .from('GUEST_BOOK')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(10);

        if (error) {
            console.error(error);
            return;
        }

        guestBooks = GUEST_BOOK;
    }

    async function getServerLog() {
        let { data: SERVER_LOG, error } = await supabase
            .from('SERVER_LOG')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(10);
          
        if (error) {
            console.error(error);
            return;
        }

        serverLogs = SERVER_LOG;
    }

    getGuestBook();
    getServerLog();

    supabase.channel('guest-book-channel')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'GUEST_BOOK' }, getGuestBook)
        .subscribe();

    supabase.channel('server-log-channel')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'SERVER_LOG' }, getServerLog)
        .subscribe();
</script>

<style>
    
</style>

<Container fluid>
    <Row>
        <Col sm="3">
            {#each guestBooks as gb (gb.uid)}
            <GuestBook name={gb.user_name} message={gb.message} color={gb.color} date={gb.created_at}/>
            {/each}
        </Col>
        <Col sm="6">
            <Center />
        </Col>
        <Col sm="3">
            {#each serverLogs as sl (sl.id)}
            <ServerLog title={sl.title} message={sl.message} color={sl.color} date={sl.created_at}/>
            {/each}
        </Col>
    </Row>
</Container>