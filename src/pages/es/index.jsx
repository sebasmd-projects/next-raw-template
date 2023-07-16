import RootLayout from '@/components/layouts/root_layout'
import GetCurrentDate from '@/components/functions/get_date'

export default function EsHomePage() {
    const current_date = GetCurrentDate()

    return (
        <RootLayout
            title={''}
            description={`${current_date}`}
            keywords={''}
            robots='index, follow'
            revisit='30 days'
        >
            <main>
                <h1>ES</h1>
            </main>
        </RootLayout>
    )
}
