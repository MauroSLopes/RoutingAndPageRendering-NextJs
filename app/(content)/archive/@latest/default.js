import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news"

export default function DefaultLatestNews() {
    const latestNews = getLatestNews();
    return (
        <div>
            <h1>Latest News</h1>
            <NewsList news={latestNews} />
        </div>
    )
}
