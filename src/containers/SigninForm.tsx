import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Formik, Form, FormikHelpers } from "formik";
import swal from "sweetalert";
import { SigninValues, AuthStateFrom } from "@interfaces";
import { SigninSchema, DEFAULT_SIGNIN_VALUES } from "@schemas";
// import { signin } from "@services"; // Service fetch to signin
import { useAppContext } from "@context";

import { Input } from "@components";

export default function SigninForm() {
  const { t } = useTranslation("formik");
  const { dispatch } = useAppContext();

  const location = useLocation();
  const navigate = useNavigate();
  const from = (location.state as AuthStateFrom)?.from || "/";
  const formTranslations = {
    required: t("required")
  };

  const handleSubmit = async (values: SigninValues, actions: FormikHelpers<SigninValues>) => {
    try {
      actions.setSubmitting(true);

      // Here should put the signin() with await
      navigate(from, { replace: true });
      // actions.resetForm({ values: DEFAULT_SIGNIN_VALUES });

      // dispatch({ type: "SIGNIN" }); // Add payload property to signin
    } catch (error) {
      let message = "¡Oh no!";
      if (error instanceof Error) message = error.message;

      swal("Error!", t(message, { ns: "errors" }) || message, "error");
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={DEFAULT_SIGNIN_VALUES}
      validationSchema={SigninSchema(formTranslations)}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="auth__form">
          <Input
            label={t("email")}
            name="email"
            type="text"
            placeholder={t("email")}
          />
          <Input
            label={t("password")}
            name="password"
            type="password"
            placeholder={t("password")}
          />
          <button
            type="submit"
            className="auth__form-submit"
            disabled={(isSubmitting)}
          >
            {t("signin-submit")}
          </button>
        </Form>
      )}
    </Formik>
  );
}
