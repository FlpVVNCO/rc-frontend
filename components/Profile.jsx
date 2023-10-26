"use client";
import {
  Avatar,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";

const Profile = () => {
  const { register, handleSubmit } = useForm();
  const [check, setCheck] = useState(false);

  const { data: session } = useSession();

  console.log(session);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data.name);
    updateUser(session?.user.id, data);
  });

  const handleClick = () => {
    setCheck(!check);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            flexFlow: "column wrap",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
            gap: 2,
            bgcolor: "primary.main",
          }}
        >
          <Avatar
            sx={{
              bgcolor: "secondary.main",

              width: 100,
              height: 100,
            }}
          />
          <Box sx={{ display: "flex", flexFlow: "column wrap", gap: 2 }}>
            <Typography
              textAlign="center"
              fontWeight={500}
              fontSize={18}
              color="white"
            >
              {session?.user.name}
            </Typography>
            <Typography
              textAlign="center"
              fontWeight={500}
              fontSize={12}
              color="white"
            >
              Followers: 0
            </Typography>
            <Typography
              textAlign="center"
              fontWeight={500}
              fontSize={12}
              color="white"
            >
              Comments: 0
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            px: { xs: 1, sm: 10 },
            py: 2,
            borderBottom: "3px solid #f0f0f0",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            sx={{ color: "white" }}
            onClick={handleClick}
            endIcon={<FiSettings />}
          >
            Edit profile
          </Button>
        </Box>

        {check ? (
          <Box
            component="form"
            onSubmit={onSubmit}
            sx={{
              p: { xs: 6, sm: 10 },
              borderRadius: "12px",
              display: "flex",
              flexFlow: "column wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              size="small"
              type="name"
              name="name"
              disabled={check ? false : true}
              defaultValue={session?.user.name}
              sx={{ mb: 2, width: { xs: "auto", sm: 500 } }}
              {...register("name", { required: true })}
            />
            <TextField
              size="small"
              type="email"
              name="email"
              disabled
              defaultValue={session?.user.email}
              sx={{ mb: 2, width: { xs: "auto", sm: 500 } }}
            />
            <TextField
              size="small"
              type="password"
              name="password"
              defaultValue="************"
              disabled
              sx={{ mb: 2, width: { xs: "auto", sm: 500 } }}
            />
            <Box
              sx={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "end",
                gap: 1,
              }}
            >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ color: "white" }}
              >
                accept
              </Button>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ color: "white" }}
                onClick={handleClick}
              >
                cancel
              </Button>
            </Box>
          </Box>
        ) : null}
      </Grid>
    </Grid>

    // <Box
    //   component="form"
    //   onSubmit={onSubmit}
    //   sx={{
    //     p: { xs: 6, sm: 10 },
    //     border: "3px solid #7590f5",
    //     borderRadius: "12px",
    //     display: "flex",
    //     flexFlow: "column wrap",
    //   }}
    // >
    //   <Avatar
    //     sx={{
    //       width: { xs: 200, sm: 300 },
    //       height: { xs: 200, sm: 300 },
    //       mb: 5,
    //     }}
    //   />
    //   <TextField
    //     fullWidth
    //     size="small"
    //     type="name"
    //     name="name"
    //     disabled={check ? false : true}
    //     defaultValue={session?.user.name}
    //     sx={{ mb: 2 }}
    //     {...register("name", { required: true })}
    //   />
    //   <TextField
    //     fullWidth
    //     size="small"
    //     type="email"
    //     name="email"
    //     disabled
    //     defaultValue={session?.user.email}
    //     sx={{ mb: 2 }}
    //   />
    //   <TextField
    //     fullWidth
    //     size="small"
    //     type="password"
    //     name="password"
    //     defaultValue="************"
    //     disabled
    //     sx={{ mb: 2 }}
    //   />
    //   <Box sx={{ display: "flex", justifyContent: "end", gap: 3 }}>
    //     {check ? (
    //       <>
    //         <Button
    //           variant="contained"
    //           color="secondary"
    //           sx={{ color: "white" }}
    //         >
    //           accept
    //         </Button>
    //         <Button
    //           variant="contained"
    //           color="secondary"
    //           sx={{ color: "white" }}
    //           onClick={handleClick}
    //         >
    //           cancel
    //         </Button>
    //       </>
    //     ) : (
    //       <Button
    //         variant="contained"
    //         color="secondary"
    //         sx={{ color: "white" }}
    //         onClick={handleClick}
    //       >
    //         Update profile
    //       </Button>
    //     )}
    //   </Box>
    // </Box>
  );
};

export default Profile;
