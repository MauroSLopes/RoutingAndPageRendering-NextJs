export default function ArchiveLayout({ archive, latest }) {
    return <div>
        <h1>News Archives</h1>
        <section id="archive">
            {archive}
        </section>
        <section id="latest">
            {latest}
        </section>
    </div>
}