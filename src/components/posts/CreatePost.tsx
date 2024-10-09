import { CustomButton } from "../buttons/CustomButton";
import { Box } from "@mui/material";
import { BaseModal } from "../modals/BaseModal";
import { useFormik } from "formik";
import { createPost } from "../../services/postService";
import * as Yup from "yup";
import CustomInput from "../customInputs/CustomInput";

const postValidation = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  body: Yup.string().required("Body is required"),
  userId: Yup.number().required("User ID is required"),
});

interface CreatePostProps {
  openPostModal: boolean;
  setOpenPostModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreatePost = ({
  openPostModal,
  setOpenPostModal,
}: CreatePostProps) => {
  const { handleSubmit, handleChange, setValues, values, errors } = useFormik({
    initialValues: {
      title: "",
      body: "",
      userId: "",
    },
    onSubmit: async (values) => {
      const post = {
        title: values.title,
        body: values.body,
        userId: Number(values.userId),
      };
      createPost(post);
      setOpenPostModal(false);
      setValues({
        title: "",
        body: "",
        userId: "",
      });
    },
    validationSchema: postValidation,
    validateOnChange: false,
  });

  return (
    <BaseModal
      openModal={openPostModal}
      setOpenModal={setOpenPostModal}
      title="Create a post"
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "1rem",
                width: "100%",
              }}
            >
              <CustomButton type="submit">Create Post</CustomButton>
            </Box>
          </Box>
        </form>
      </Box>
    </BaseModal>
  );
};
