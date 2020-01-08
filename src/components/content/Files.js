import React from "react";
import "../../style/styles.css";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import FileDropzone from "../subcomp/FileDropzone";

const exampleList = [
    {
        url: 'https://www.goldmansachs.com/insights/pages/gs-research/taking-the-heat/report.pdf',
    },
    {
        url: 'https://www.goldmansachs.com/insights/pages/gs-research/taking-the-heat/report.pdf',
    }, {
        url: 'https://www.goldmansachs.com/insights/pages/gs-research/taking-the-heat/report.pdf',
    }, {
        url: 'https://www.goldmansachs.com/insights/pages/gs-research/taking-the-heat/report.pdf',
    }, {
        url: 'https://www.goldmansachs.com/insights/pages/gs-research/taking-the-heat/report.pdf',
    }, {
        url: 'https://www.goldmansachs.com/insights/pages/gs-research/taking-the-heat/report.pdf',
    },
];

export default class Files extends React.Component {

    constructor(props) {
        super(props);
        this.fileList = exampleList;
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <Typography weight={"bold"} variant={"h5"} gutterBottom>
                    {"File Storage"}
                </Typography>
                <Typography gutterBottom>
                    Store your important documents here as a backup (6 File Limit).
                    <br/>
                </Typography>
                <div className={'fileContainer'}>
                    <FileDropzone/>

                    <Grid container
                          direction="row"
                          justify="left"
                          alignItems="center">
                        {this.fileList.map(({url}, i) => (
                            <Grid container item justify="center" xs={4}>
                                <Grow in={true}
                                      style={{transformOrigin: '0 0 0'}}
                                      {...{timeout: 1000}}>
                                    <div className={'file'}>
                                        <div>
                                            <iframe
                                                src={url}
                                                className={'iframeStyle'}/>

                                        </div>
                                    </div>
                                </Grow>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        )
    };
}