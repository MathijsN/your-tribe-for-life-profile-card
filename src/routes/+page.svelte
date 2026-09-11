<script>
    import ProfilePicture from "$lib/components/ProfilePicture.svelte";
    import ProfileInfo from "$lib/components/ProfileInfo.svelte";
    import ProfileFooter from "$lib/components/ProfileFooter.svelte";

    let { data } = $props();
    let person = $derived(data.person[0]);
</script>

<main style="--fav-border-radius:{person.fav_border_radius}px;">
    <ProfilePicture
        nickname={person.nickname}
        team_s13={person.team_s13}
        mugshot={person.mugshot_year2}
    />
    <ProfileInfo {person} />
    <ProfileFooter bio={person.bio} />
</main>

<style>
</style>
