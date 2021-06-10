import {
    Button,
    Card,
    CardContent,
    CircularProgress,
    Grid,
    makeStyles,
    Typography
} from '@material-ui/core';
import { Field, FieldArray, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { array, boolean, number, object, string, ValidationError } from 'yup';
import { AddPost } from "../Redux/Action/RecipeAction"
import { POST_CREATE_RESET } from "../Redux/Action/actionTypes"
import axios from "axios";
const list_of_ingd = { ind_name: '', ind_quantity: 0, ind_unit: '' };
const useStyles = makeStyles((theme) => ({
    errorColor: {
        color: theme.palette.error.main,
    },
    noWrap: {
        [theme.breakpoints.up('sm')]: {
            flexWrap: 'nowrap',
        },
    },
}));

const Input = ({ history }) => {

    const classes = useStyles();

    const dispatch = useDispatch()

    const postCreate = useSelector((state) => state.postCreate)
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        post: createdPost,
    } = postCreate
    useEffect(() => {


        if (successCreate) {
            history.push('/')
        }
    }, [dispatch, history, successCreate])

    // const createPostHandler = (values) => {
    //     dispatch(AddPost(values))
    // }

    return (
        <Card>
            <CardContent>
                <Formik
                    initialValues={{
                        dish_name: '',
                        list_of_ind: [list_of_ingd],
                        step_of_cook: '',
                        image_url: '',
                    }}


                    onSubmit={async (values) => {
                        console.log('my values', values);
                        let res={}
                        try {
                             res=await axios.post(
                                "https://recipes-api5.herokuapp.com/api/recipe",
                                values,
                              );
                              history.push('/')
                              console.log(res)
                        } catch (error) {
                            
                        }
                        // return new Promise((res) => setTimeout(res, 2500));
                    }}
                >
                    {({ values, errors, isSubmitting, isValid }) => (
                        <Form autoComplete="off">
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <Field
                                        fullWidth
                                        name="dish_name"
                                        component={TextField}
                                        label="Dish Name"
                                    />
                                </Grid>



                                <FieldArray name="list_of_ind">
                                    {({ push, remove }) => (
                                        <React.Fragment>
                                            <Grid item>
                                                <Typography variant="body2">
                                                    All your ingredients.
                        </Typography>
                                            </Grid>

                                            {values.list_of_ind.map((_, index) => (
                                                <Grid
                                                    container
                                                    item
                                                    className={classes.noWrap}
                                                    key={index}
                                                    spacing={2}
                                                >
                                                    <Grid item container spacing={2} xs={12} sm="auto">
                                                        <Grid item xs={12} sm={6}>
                                                            <Field
                                                                fullWidth
                                                                name={`list_of_ind.${index}.ind_name`}
                                                                component={TextField}
                                                                label="Ingredients. Name"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <Field
                                                                fullWidth
                                                                name={`list_of_ind.${index}.ind_quantity`}
                                                                component={TextField}
                                                                type="number"
                                                                label="Ingredient Quantity"
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <Field
                                                                fullWidth
                                                                name={`list_of_ind.${index}.ind_unit`}
                                                                component={TextField}
                                                                label="Ingredient Unit"
                                                            />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={12} sm="auto">
                                                        <Button
                                                            disabled={isSubmitting}
                                                            onClick={() => remove(index)}
                                                        >
                                                            Delete
                            </Button>
                                                    </Grid>
                                                </Grid>
                                            ))}



                                            <Grid item>
                                                <Button
                                                    disabled={isSubmitting}
                                                    variant="contained"
                                                    onClick={() => push(list_of_ingd)}
                                                >
                                                    Add Ind
                        </Button>
                                            </Grid>
                                        </React.Fragment>
                                    )}
                                </FieldArray>

                                <Grid item>
                                    <Field
                                        fullWidth
                                        multiline
                                        rows={8}
                                        name="step_of_cook"
                                        component={TextField}
                                        label="Steps Of Cooking"
                                    />
                                </Grid>
                                <Grid item>
                                    <Field
                                        fullWidth
                                        name="image_url"
                                        component={TextField}
                                        label="Image URL"
                                    />
                                </Grid>

                                <Grid item>
                                    <Button
                                        disabled={isSubmitting}
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        startIcon={
                                            isSubmitting ? (
                                                <CircularProgress size="0.9rem" />
                                            ) : undefined
                                        }
                                       // onClick={createPostHandler}
                                    >
                                        {isSubmitting ? 'Submitting' : 'Submit'}
                                    </Button>
                                </Grid>
                            </Grid>

                            {/*<pre>{JSON.stringify({ values, errors }, null, 4)}</pre>*/}
                            {loadingCreate && <Loader />}
                            {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
                        </Form>
                    )}
                </Formik>
            </CardContent>
        </Card>


    )
}

export default Input
