import RootLayout from '@/components/layouts/root_layout'
import GetCurrentDate from '@/components/functions/get_date'

export default function EnHomePage() {
    const current_date = GetCurrentDate()

    return (
        <RootLayout
            title={''}
            description={`${current_date} - description`}
            keywords={''}
            robots='index, follow'
            revisit='30 days'
        >
            <main>
                <h1>EN</h1>
            </main>
        </RootLayout>
    )
}
