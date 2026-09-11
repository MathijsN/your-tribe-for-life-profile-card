<script>
    let { bio } = $props();
</script>

<section>
    <p>{bio}</p>
</section>

<style>
    section {
        height: 12em;
        background-color: #373737;
        background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20fill%3D'none'%20viewBox%3D'0%200%2074%20109'%20width%3D'64'%20height%3D'64'%20preserveAspectRatio%3D'xMidYMid%20meet'%3E%3Cpath%20stroke%3D'%23262626'%20stroke-linecap%3D'round'%20stroke-width%3D'1.15'%20d%3D'M55.07%2052.343c-4.327%201.201-8.39%202.884-9.484-2.546-.652-3.238.494-5.967%203.368-7.677%2011.603-6.906%2020.84%207.236%2015.342%2017.558-3.923%207.366-12.322%2011.194-20.363%2011.166-10.95-.039-13.767-12.358-12.114-21.562C33.62%2039.25%2041.665%2029.593%2052.77%2030.993c14.008%201.767%2022.6%2018.061%2018.588%2030.922-3.935%2012.616-13.08%2023.833-26.044%2027.654-6.615%201.949-14.788%202.81-21.579%201.233-9.87-2.292-14.59-12.169-16.8-21.196-3.392-13.862%205.371-27.741%2014.897-37.087%209.918-9.73%2022.175-14.67%2035.903-10.057%2012.787%204.297%2015.46%2017.08%2014.586%2029.13-1.474%2020.319-13.039%2037.137-28.96%2049.469-14.497%2011.23-37.814%209.732-41.192-11.172-2.075-12.84.147-26.975%204.637-39.077%203.855-10.39%209.83-20.27%2017.107-28.616C38.706%205.229%2032.233%2016.286%2048.203%201'%2F%3E%3C%2Fsvg%3E");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 150%;
        animation: --background-movement 6s infinite ease;
        animation-play-state: paused;
        margin-bottom: 15px;

        &:hover {
            animation-play-state: running;
        }

        display: grid;
        place-items: center;

        p {
            font-family: "Times New Roman", Times, serif;
            font-size: 3rem;
            color: var(--color-secondary);
        }
    }

    @keyframes --background-movement {
        0% {
            background-position: 50% 50%;
        }

        33% {
            background-position: 20% 50%;
            background-size: 175%;
        }

        66% {
            background-position: 75% 50%;
            background-size: 125%;
        }

        100% {
            background-position: 50% 50%;
        }
    }
</style>
