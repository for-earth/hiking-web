import React from "react";
import { Avatar, Box, Chip, Grid, Tab, Tabs } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import type { ActivityComponentType } from "@stackflow/react";

import * as commonCss from "../styles/common.css";

import * as css from "./MyPage.css";

const MyPage: ActivityComponentType = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppScreen appBar={{ title: "MY" }}>
      <main className={commonCss.layout}>
        <div>
          <div className={css.myInfoSummary}>
            <Avatar
              sx={{ width: 78, height: 78 }}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              <div>
                <Typography variant="body2" fontWeight={800}>
                  10
                </Typography>
                <Typography variant="body2">포스팅</Typography>
              </div>
              <div>
                <Typography variant="body2" fontWeight={800}>
                  100
                </Typography>
                <Typography variant="body2">팔로워</Typography>
              </div>
              <div>
                <Typography variant="body2" fontWeight={800}>
                  50
                </Typography>
                <Typography variant="body2">팔로잉</Typography>
              </div>
            </div>
          </div>
          <div>
            <h4 style={{ margin: "0", marginTop: "12px", marginBottom: "4px" }}>
              내이름은 마운틴
            </h4>
            <small>등산하는걸 좋아해요</small>
          </div>
        </div>

        <Box
          sx={{
            backgroundColor: "lightblue",
            padding: "12px",
            borderRadius: "8px",
            marginTop: "12px",
          }}
        >
          <h5 style={{ marginTop: 0, marginBottom: 0 }}>완등한 산</h5>
          <Box sx={{ marginTop: "4px", gap: "4px", display: "flex" }}>
            <Chip label="설악산" variant="outlined" />
            <Chip label="한라산" variant="outlined" />
            <Chip label="북한산" variant="outlined" />
            <Chip label="불암산" variant="outlined" />
            <Chip label="문수산" variant="outlined" />
          </Box>
        </Box>

        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Tabs value={value} onChange={handleChange} textColor="inherit">
              <Tab label="게시글" {...a11yProps(0)} sx={{ width: "33%" }} />
              <Tab label="사진첩" {...a11yProps(1)} sx={{ width: "33%" }} />
              <Tab label="방명록" {...a11yProps(2)} sx={{ width: "33%" }} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="http://image.hnsmall.com/images/goods/011/19722011_g.jpg"
                  sx={{
                    objectFit: "contain",
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="body1" component="div">
                    등산 잘하는 법
                  </Typography>
                  <Typography variant="body2">
                    어제 등산을 갔다가 너무 좋았어요. 북한산 완등했어요
                  </Typography>
                </CardContent>
              </Card>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="http://image.hnsmall.com/images/goods/011/19722011_g.jpg"
                  sx={{
                    objectFit: "contain",
                  }}
                />
                <CardContent>
                  <Typography gutterBottom variant="body1" component="div">
                    제이엔케이 5단 접이식 초경량 등산스틱
                  </Typography>
                  <Typography variant="body2">
                    쿠팡에서 3만원에 산 지팡이에요. 너무 좋아요
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {Array.from(Array(6)).map((_, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="http://image.hnsmall.com/images/goods/011/19722011_g.jpg"
                      sx={{
                        objectFit: "contain",
                      }}
                    />
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box>
      </main>
    </AppScreen>
  );
};

export default MyPage;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
