<script>
    import {selectGuestBook} from '$lib/index';
    import {supabase} from '$lib/supabase';
    import { Input, Button } from '@sveltestrap/sveltestrap';
    import GuestBook from '$lib/components/GuestBook.svelte';

    let name;
    let content;
    let guestBookList = [];
    $: guestBookList;

    async function getGuestBook() {
        guestBookList = await selectGuestBook(supabase);
    }

    getGuestBook()

    supabase.channel('guest-book-channel')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'GUEST_BOOK' }, getGuestBook)
        .subscribe();

    async function insertGuestBook() {
        const { data, error } = await supabase
            .from('GUEST_BOOK')
            .insert([ { user_name: name, message: content }, ]);
        
        if (error) {
            alert("오류! 개발자에게 문의하세요.");
            return;
        } 

        name = "";
        content = "";
    }

    function keyupEvent(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            insertGuestBook();
        }
    }
</script>

<style>
    section {
        max-width: 600px;
        height: 100vh;
        margin: auto;
        padding: 1rem;
    }

    .book-list {
        height: 100%;
        /* background-color: #fff1; */
        margin-bottom: 14px;
        overflow: hidden auto;
    }

    .book-input-form {
        position: fixed;
        left: 0;
        bottom: 0;
        background-color: #0005;
        padding: 1rem;
        width: 100vw;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
    }
    .book-input-form > .book-input-wrap {
        width: calc(100% - 80px);
    }

    .book-send-wrap {
        width: 70px;
    }
</style>

<svelte:head>
    <meta name="viewport" content="initial-scale=1.0; maximum-scale=1.0; minimum-scale=1.0; user-scalable=no;" />
    <title>글 남기기 : 플로우 모니토이</title>
</svelte:head>

<section>
    <div class="book-list">
        {#if guestBookList.length > 0}
            {#each guestBookList as gb (gb.uid)}
            <GuestBook name={gb.user_name} message={gb.message} color={gb.color} date={gb.created_at}/>
            {/each}
        {/if}
    </div>
    <div class="book-input-form">
        <div class="book-input-wrap">
            <Input type="text" 
                class="rounded-0 rounded-top" 
                placeholder="이름" 
                bind:value={name}
            />
            <Input type="text" 
                class="rounded-0 rounded-bottom" 
                placeholder="내용을 입력하세요." 
                bind:value={content}
                on:keyup={keyupEvent}
            />
        </div>
        <div class="book-send-wrap">
            <Button class="h-100 w-100" size="md" on:click={insertGuestBook}>전송</Button>
        </div>
    </div>
    <!-- 예시도 넣어주자 -->
    <!-- 오늘 재택근무! -->
    <!-- 오늘 연차입니다 -->
</section>