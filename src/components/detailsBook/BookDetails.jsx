import React, {useRef, useState} from 'react';
import "./bookDetils.css";
import {Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper} from "@mui/material";
import {Link} from "react-router-dom";

const BookDetails = (props) => {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');
    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = useRef(null);
    React.useEffect(() => {
        if (open) {
            const {current: descriptionElement} = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);
    return (

        <div className={"book__inner"}>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 2,
                        width: 500,
                        height: 500,
                    },
                    '@media (max-width: 622px)': {
                        '& > :not(style)': {
                            width: 300,
                            height: 300,
                        },
                    },
                }}

            >
                <Paper elevation={3}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Link to={"/"}><img src="/img/arrow1.png" alt="arrow" style={{ marginTop: 5, position:"absolute",width:30 }} /></Link>
                    </div>
                    <div className="img__item"><img src={props.img} alt={props.title} /></div>
                </Paper>


            </Box>

            <div className="section_text">
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 2,
                            opacity: 0.7,
                            width: 550,
                            height: 500,
                        },
                        '@media (max-width: 1195px)': {
                            '& > :not(style)': {
                                width: 500,
                                height: 500,
                            },
                        },
                        '@media (max-width: 622px)': {
                            '& > :not(style)': {
                                width: 300,
                                height: 300,
                            },
                        },
                    }}
                >
                    <Paper elevation={3}>
                        <div className={"detail__title"}>
                            <h2>{props.title}</h2>
                        </div>
                        <div className={"detail__partData"}>
                        <p><span>Authors:</span>{props.authors}</p>
                        <p><span>Publisher:</span>{props.publisher}</p>
                        <p><span>Language:</span>{props.language}</p>
                        <p><span>PublishedDate:</span>{props.publishedDate}</p>
                        <p><span>PageCount:</span>{props.pageCount}</p>
                        </div>
                        <div className={"detail__partDescription"}>
                            <Button onClick={handleClickOpen('body')} ><h4 className={"paper__title"}>Click here to see the description</h4></Button>
                            <Dialog
                                className={"dialog"}
                                open={open}
                                onClose={handleClose}
                                scroll={scroll}
                                aria-labelledby="scroll-dialog-title"
                                aria-describedby="scroll-dialog-description"
                            >
                                <DialogTitle id="scroll-dialog-title">{props.title}</DialogTitle>
                                <DialogContent dividers={scroll === 'paper'}>
                                    <DialogContentText
                                        id="scroll-dialog-description"
                                        ref={descriptionElementRef}
                                        tabIndex={-1}
                                    >{props.description}
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Cancel</Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </Paper>

                </Box>

            </div>

        </div>

    );
};

export default BookDetails;
