import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";

export const NoteView = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        sx={{ mb: 1 }}
        alignItems="center"
      >
        <Grid item>
          <Typography fontSize={39} fontWeight="Light">
            28 de agosto, 2023
          </Typography>
        </Grid>
        <Grid item>
          <Button>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Guardar
          </Button>
        </Grid>
        <Grid container>
          <TextField
            type="text"
            variant="filled"
            fullWidth
            placeholder="Ingrese un titulo"
            label="Titulo"
            sx={{ border: "none", mb: 1 }}
          />
          <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="¿Que sucedió en el dia de hoy?"
            minRows={5}
            sx={{ border: "none", mb: 1 }}
          />
        </Grid>
        {/* Imagenes */}
        <ImageGallery></ImageGallery>
      </Grid>
    </>
  );
};
