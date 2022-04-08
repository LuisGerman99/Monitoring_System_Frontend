import { Grid, Container, Paper } from '@mui/material'
import LineChart from '../components/linechart'
import "../App.css";

const Graphpage = () => {
    return (
        <div className='graph_page'>
            <Grid
                container
                minHeight='104vh'
                flexDirection="column"
                rowSpacing={4}
            >
                <Grid item xs={12}>
                    <Container className="top_section" maxWidth={false}>
                        <Paper className="paper_section">
                            <LineChart />
                        </Paper>
                    </Container>
                </Grid>
            </Grid>
        </div>
    );
};

export default Graphpage;