import { CustomButton } from "../buttons.tsx/CustomButton";
import { Box, Button } from "@mui/material";
import { BaseModal } from "../modals/BaseModal";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInput from "../customInputs/CustomInput";
import { PostsProps } from "../../pages/adminPages/Posts";
import { deletePost, updatePost } from "../../services/postService";

const postValidation = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  body: Yup.string().required("Body is required"),
  userId: Yup.number().required("User ID is required"),
});

interface EditPostProps {
  openPostEditModal: boolean;
  setOpenPostEditModal: React.Dispatch<React.SetStateAction<boolean>>;
  postSelected: PostsProps;
}

export const EditPost = ({
  openPostEditModal,
  setOpenPostEditModal,
  postSelected,
}: EditPostProps) => {

  const { handleSubmit, handleChange, setValues, values, errors } = useFormik({
    initialValues: {
      title:  postSelected ? postSelected?.title : "",
      body:  postSelected ? postSelected?.body : "",
      userId:  postSelected ? postSelected?.userId.toString() : "",
      id:  postSelected ? postSelected?.id.toString() : "",
    },
    onSubmit: async (values) => {
      const post = {
        title: values.title,
        body: values.body,
        userId: Number(values.userId),
      };
      updatePost(Number(values.id), post);
      setOpenPostEditModal(false);
      setValues({
        title: "",
        body: "",
        userId: "",
        id: "",
      });
    },
    validationSchema: postValidation,
    validateOnChange: false,
    enableReinitialize: true,
  });

  const onClose = () => {
    setOpenPostEditModal(false);
    setValues({
      title: "",
      body: "",
      userId: "",
      id: "", 
    })
  }

  const handleDelete = (id: number) => {
    try {
      deletePost(id);
      setOpenPostEditModal(false);
      setValues({
        title: "",
        body: "",
        userId: "",
        id: "",
      });
      
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <BaseModal
      openModal={openPostEditModal}
      setOpenModal={setOpenPostEditModal}
      title="Edit a post"
      width="50%"
      onClose={onClose}
    >
      <Box
        sx={{
          width: "100%",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <CustomInput
              type="text"
              label="Title"
              name="title"
              value={values.title}
              onChange={handleChange}
              error={Boolean(errors.title)}
              helperText={errors.title}
            />
            <CustomInput
              type="text"
              label="Body"
              name="body"
              value={values.body}
              onChange={handleChange}
              error={Boolean(errors.body)}
              helperText={errors.body}
              rows={4}
              multiline
            />
            <CustomInput
              type="number"
              label="User ID"
              name="userId"
              value={values.userId}
              onChange={handleChange}
              error={Boolean(errors.userId)}
              helperText={errors.userId}
            />
            <CustomInput
              type="number"
              label="Id"
              name="id"
              value={values.id}
              onChange={handleChange}
              error={Boolean(errors.id)}
              helperText={errors.id}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
                width: "100%",
                gap: "1rem",
              }}
            >
              <CustomButton type="submit">Update Post</CustomButton>
              <Button
                onClick={() => handleDelete(Number(values.id))}
                variant="contained"
                color="error"
                sx={{
                  width: "40%",
                }}
              >
                Delete Post
              </Button>
            </Box>
          </Box>
        </form>
      </Box>
    </BaseModal>
  );
};
