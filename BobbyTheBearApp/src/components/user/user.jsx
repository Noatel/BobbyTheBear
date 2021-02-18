import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions  from "../../actions/user";
import UserForm from "./userForm";
import {Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";


const User = (props) => {

    useEffect(() => {
        props.fetchAllUsers()
        }, []);


    return (
        <Paper>
            <Grid container>
                <Grid item xs={6}>
                    <UserForm/>
                </Grid>
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.userList.map((data, index) => {
                                        return (<TableRow key={index}>
                                            <TableCell>{data.username}</TableCell>
                                        </TableRow>);
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );
}

const mapStateToProps = state => {
    return {
        userList: state.user.list,
    };
};

const mapActionToProps = {
    fetchAllUsers: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(User);