import React from "react";
import { Typography, Grid, Stack, Box } from "@mui/material";
import { sourceNames, supplierNames } from "../data/test-data";
import FormField from "../components/form-field";
import PageTitle from "../components/page-title";

const UploadSingleDelivery = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          pt: "8px"
        }}
      >
        <Grid id="master" container direction="column">
          <Grid id="master-header" item xs={12}>
            <Grid id="title" container direction="row">
              <Grid id="header-blank-left" item xs={4} />
              <Grid id="header-title" item xs={4}>
                <PageTitle pageTitle={"Upload Delivery"} />
              </Grid>
              <Grid id="header-blank-right" item xs={4} />
            </Grid>
          </Grid>
          <Grid id="master-hero" item xs={12}>
            <Box id="hero-box">
              <Grid
                id="hero-master"
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-end"
              >
                <Grid id="hero-blank-left" item xs={4}></Grid>
                <Grid id="hero-form" item xs={4}>
                  <Grid id="form-master" container direction="column">
                    <Grid id="form-checkboxes" container>
                      <Grid item id="form-sample-checkbox" xs={12}>
                        <Stack>
                          <FormField
                            fieldDisplayName={"Supplier Name"}
                            options={supplierNames}
                            isRequired={false}
                          />
                          <FormField
                            fieldDisplayName={"Source Name"}
                            options={sourceNames}
                            isRequired={true}
                          />
                        </Stack>
                      </Grid>
                    </Grid>
                    <Grid item id="form-fileUpload" xs={12}>
                      <Grid
                        container
                        id="fileUpload-master"
                        direction="row"
                        alignItems="flex-end"
                        spacing={2}
                      ></Grid>
                    </Grid>
                    <Grid item id="form-others" xs={12}>
                      <Grid container id="form-others-master" direction="row">
                        <Grid item id="form-others-fields-buttons" xs={8}>
                          <Grid
                            container
                            direction="column"
                            id="others-fields-buttons-master"
                          >
                            <Grid item id="other-fields">
                              <Stack>
                                <Stack
                                  direction="row"
                                  spacing={0}
                                  alignItems="center"
                                ></Stack>
                              </Stack>
                            </Grid>
                            <Grid item id="other-buttons" xs={12}>
                              <Box sx={{ flexGrow: 1 }}>
                                <Grid
                                  container
                                  id="other-buttons-master"
                                  spacing={2}
                                  justifyContent="flex-end"
                                  alignItems="flex-end"
                                >
                                  <Grid item xs={6}>
                                    <Stack
                                      direction="row"
                                      spacing={2}
                                      justifyContent="flex-end"
                                      alignItems="flex-end"
                                    >
                                      {/* <TwoStepButtonGroup
                                      btnGroup={btnGroup[buttonGroup]}
                                    /> */}
                                    </Stack>
                                  </Grid>
                                </Grid>
                              </Box>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item id="form-others-blank" xs={4}></Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item id="hero-blank-right" xs={4}></Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item id="footer" xs={12}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UploadSingleDelivery;
