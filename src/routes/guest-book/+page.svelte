<script>
    import {selectGuestBook} from '$lib/index';
    import {supabase} from '$lib/supabase';
    import { Input, Button } from '@sveltestrap/sveltestrap';
    import GuestBook from '$lib/components/GuestBook.svelte';

    let guestBookList = [];
    $: guestBookList;

    async function getGuestBook() {
        guestBookList = await selectGuestBook(supabase);
    }

    getGuestBook()

    supabase.channel('guest-book-channel')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'GUEST_BOOK' }, getGuestBook)
        .subscribe();
</script>

<style>
    section {
        max-width: 600px;
        height: 100vh;
        margin: auto;
        padding: 1rem;
    }

    .book-list {
        height: calc(100% - 90px);
        background-color: #fff1;
        margin-bottom: 14px;
        overflow: hidden auto;
    }

    .book-input-form {
        width: 100%;
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
            <Input type="text" placeholder="이름" />
            <Input type="text" placeholder="내용을 입력하세요." />
        </div>
        <div class="book-send-wrap">
            <Button class="h-100 w-100" size="md">전송</Button>
        </div>
    </div>
    <!-- 예시도 넣어주자 -->
    <!-- 오늘 재택근무! -->
    <!-- 오늘 연차입니다 -->
</section>