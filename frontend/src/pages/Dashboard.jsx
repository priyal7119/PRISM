import Card from "../components/common/Card";
import Button from "../components/common/Button";
import Badge from "../components/common/Badge";
import SectionHeader from "../components/common/SectionHeader";
import PageContainer from "../components/common/PageContainer";

function Dashboard() {

    return (

        <PageContainer>

            <SectionHeader
                title="Dashboard"
                subtitle="Network Overview"
            />

            <Card>

                <Badge
                    text="Nominal"
                    color="green"
                />

                <br />
                <br />

                <Button>

                    Launch Demo

                </Button>

            </Card>

        </PageContainer>

    );

}

export default Dashboard;