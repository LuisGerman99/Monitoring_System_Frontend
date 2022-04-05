import { Grid, Container, Paper, Box } from '@mui/material'
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
                        <Container className='top_section' maxWidth={false}>
                            <Paper>
                                SECCION DE CONTENIDO
                            </Paper>
                        </Container>
                    </Grid>
                    <Grid item xs={12}>
                        <Container maxWidth={false}>
                            <Paper>
                                SECCION DE CONTENIDO
                                <Container>
                                    <LineChart />
                                </Container>
                            </Paper>
                        </Container>
                    </Grid>
            </Grid>
        </div>
    );
};

export default Graphpage;