<script>
    let { nickname, team_s13, mugshot } = $props();
</script>

<section>
    <img src="https://fdnd.directus.app/assets/{mugshot}?format=webp" alt="" />
    <div>
        <h2>{nickname}</h2>
        <p>Team {team_s13}, <span>member</span></p>
    </div>
</section>

<style>
    section {
        height: 31.25em;
        position: relative;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            scale: 1.1;
        }

        div {
            position: absolute;
            bottom: 0;
            padding: 0 0 15px 15px;
            width: 100%;
            height: 33%;

            background: #d9d9d9;
            background: linear-gradient(
                180deg,
                rgba(217, 217, 217, 0) 0%,
                rgba(40, 40, 40, 1) 100%
            );

            color: white;

            display: flex;
            justify-content: end;
            flex-direction: column;
            gap: 8px;

            h2 {
                font-size: 2rem;
            }

            p {
                color: #d1d1d1;

                span {
                    color: #848484;
                }
            }
        }
    }
</style>
