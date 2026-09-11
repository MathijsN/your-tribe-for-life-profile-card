<script>
    let { person } = $props();
</script>

<section>
    <a href={person.squad_page_s13}
        >squadpage
        <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.66602 0.666504L0.666016 8.6665M8.66602 7.33317V0.666504H1.99935"
                stroke="#373737"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
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

<style>
    section {
        background: var(--color-secondary);
        padding: 30px 15px;
        display: grid;
        grid-template-rows: min-content 1fr min-content;

        a {
            text-decoration: none;
            color: var(--color-primary);
            width: max-content;
            cursor: pointer;

            svg {
                transition: all 0.3s ease;
            }

            &:hover {
                svg {
                    margin-left: 0.5rem;
                    rotate: 45deg;
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
