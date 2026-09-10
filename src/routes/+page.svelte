<script>
    let { data } = $props();
    let person = $derived(data.person[0]);
</script>

<main style="--fav-border-radius:{person.fav_border_radius}px;">
    <section class="main-section">
        <img
            src="https://fdnd.directus.app/assets/{person.mugshot}?format=webp"
            alt=""
        />
        <div>
            <h2>{person.nickname}</h2>
            <p>Team {person.team_s13}, <span>member</span></p>
        </div>
    </section>
    <section class="main-info">
        <a href="#"
            >squadpage
            <div class="underline"></div>
        </a>
        <h1>{person.residency}</h1>
        <ul>
            <li>"fav_feature": "{person.fav_feature}",</li>
            <li>"fav_attribute": "{person.fav_attribute}",</li>
            <li>"fav_tag": "{person.fav_tag}",</li>
            <li>"fav_property": "{person.fav_property}",</li>
            <li>"fav_color": "{person.fav_color}"</li>
        </ul>
    </section>
</main>

<style>
    .main-section,
    img,
    .main-info,
    div {
        border-radius: var(--fav-border-radius);
    }

    .main-section {
        height: 31.25em;
        position: relative;
        overflow: hidden;
        margin-block: 15px 7.5px;

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

    .main-info {
        background: #c0b4a0;
        padding: 30px 15px;
        height: 20em;
        margin-block: 7.5px;

        display: grid;
        grid-template-rows: min-content 1fr min-content;

        a {
            text-decoration: none;
            color: var(--color-primary);
            width: max-content;

            .underline {
                margin-top: 2px;
                width: 0%;
                height: 1px;
                background-color: var(--color-primary);
                transition: all 0.3s ease;
            }

            &:hover {
                .underline {
                    width: 100%;
                    transition: all 0.3s ease;
                }
            }
        }

        h1 {
            letter-spacing: -3%;
            font-size: 3rem;
            color: var(--color-primary);
            align-self: end;
        }

        ul {
            list-style: none;

            li {
                color: var(--color-primary);
                line-height: 1.25;
            }
        }
    }
</style>
