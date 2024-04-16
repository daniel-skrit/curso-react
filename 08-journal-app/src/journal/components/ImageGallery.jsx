import { ImageList, ImageListItem } from "@mui/material";

export const ImageGallery = ({imageUrls = []}) => {
  return (
    <ImageList sx={{ width: "100%", height: 500 }} cols={4} rowHeight={164}>
      {imageUrls.map((item) => (
        <ImageListItem key={item}>
          <img
            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item}?w=164&h=164&fit=crop&auto=format`}
            loading="lazy"
            alt="imagen de la nota"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};


