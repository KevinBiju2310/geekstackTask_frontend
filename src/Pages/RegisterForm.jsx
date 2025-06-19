import BackgroundImage from "../Components/BackgroundImage";
import Dropdown from "../Components/Dropdown";
import Input from "../Components/Input";
import Button from "../Components/Button";
import { useState } from "react";
import { getNames } from "country-list";
import { register } from "../Services/authService";
import { useNavigate, Link } from "react-router-dom";

const degreeOptions = [
  { value: "mbbs", label: "MBBS" },
  { value: "pg", label: "PG" },
  { value: "superspeciality", label: "Super Speciality" },
  { value: "fellowship", label: "Fellowship" },
];

const completionOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const mbbsYearOptions = [
  { value: "1st year", label: "1st year" },
  { value: "2nd year", label: "2nd year" },
  { value: "3rd year", label: "3rd year" },
  { value: "4th year", label: "4th year" },
  { value: "5th year", label: "5th year" },
  { value: "6th year", label: "6th year" },
  { value: "7th year", label: "7th year" },
];

const otherYearOptions = [
  { value: "1st year", label: "1st year" },
  { value: "2nd year", label: "2nd year" },
  { value: "3rd year", label: "3rd year" },
  { value: "4th year", label: "4th year" },
  { value: "5th year", label: "5th year" },
];

const pgdegreeOptions = [
  { value: "diploma", label: "Diploma" },
  { value: "dnb", label: "DNB" },
  { value: "md", label: "MD" },
  { value: "ms", label: "MS" },
];

const specialityOptions = [
  { value: "heartsurgeon", label: "Heart Surgeon" },
  { value: "other", label: "Other" },
];

const fellowshipOptions = [{ value: "other", label: "Other" }];

const countryOptions = getNames().map((name) => ({
  value: name.toLowerCase(),
  label: name,
}));

const RegisterForm = () => {
  const [currentStep, setCurrentstep] = useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",

    degree: "",
    completion: "",
    country: "",
    instituteName: "",
    medicalRegistrationNumber: "",
    year: "",
    pgdegree: "",
    speciality: "",
    fellowship: "",
  });

  const isStep1Valid = () => {
    return (
      formData.firstName.trim() &&
      formData.lastName.trim() &&
      formData.email.trim()
    );
  };

  const isStep2Valid = () => {
    if (!formData.degree || !formData.completion || !formData.country)
      return false;

    if (formData.degree === "mbbs") {
      if (formData.completion === "yes") {
        return (
          formData.instituteName.trim() &&
          formData.medicalRegistrationNumber.trim()
        );
      } else {
        return formData.year;
      }
    }

    if (formData.degree === "pg") {
      if (formData.completion === "yes") {
        return (
          formData.instituteName.trim() &&
          formData.medicalRegistrationNumber.trim() &&
          formData.pgdegree
        );
      } else {
        return (
          formData.instituteName.trim() &&
          formData.medicalRegistrationNumber.trim() &&
          formData.pgdegree &&
          formData.speciality &&
          formData.year
        );
      }
    }

    if (formData.degree === "superspeciality") {
      if (formData.completion === "yes") {
        return (
          formData.instituteName.trim() &&
          formData.year &&
          formData.speciality &&
          formData.medicalRegistrationNumber.trim()
        );
      } else {
        return (
          formData.instituteName.trim() &&
          formData.speciality &&
          formData.medicalRegistrationNumber.trim()
        );
      }
    }

    if (formData.degree === "fellowship") {
      if (formData.completion === "yes") {
        return (
          formData.instituteName.trim() &&
          formData.fellowship &&
          formData.medicalRegistrationNumber.trim()
        );
      } else {
        return (
          formData.instituteName.trim() &&
          formData.fellowship &&
          formData.medicalRegistrationNumber.trim() &&
          formData.year
        );
      }
    }

    return false;
  };

  const handleStep1 = () => {
    if (isStep1Valid()) {
      setCurrentstep(2);
    }
  };

  const handleStep2Submit = async () => {
    if (!isStep2Valid()) return;
    try {
      const result = await register(formData);
      setSuccess(true);
      if (result) {
        navigate("/");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <BackgroundImage>
      <div className="bg-white rounded-2xl shadow-2xl p-14 max-w-xl backdrop-blur-sm bg-opacity-95">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {currentStep === 1 ? (
              <>
                Welcome Doctor!
                <br />
                Register your details and start
              </>
            ) : (
              "Enter your Educational details"
            )}
          </h1>
        </div>

        {currentStep == 1 && (
          <div className="space-y-6">
            <Input
              type="text"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />

            <Input
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />

            <Input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <Button onClick={handleStep1} disabled={!isStep1Valid()}>
              Continue
            </Button>
            <div className="text-center mt-8 pt-6">
              <p className="text-gray-600">
                Do you have an account?{" "}
                <Link
                  to="/"
                  className="text-[#1D267E] hover:text-[#151e6b] font-semibold transition-colors"
                >
                  login
                </Link>
              </p>
            </div>
          </div>
        )}

        {currentStep == 2 && (
          <div className="space-y-6">
            <Dropdown
              options={degreeOptions}
              value={formData.degree}
              onChange={(e) =>
                setFormData({ ...formData, degree: e.target.value })
              }
              placeholder="Select your degree"
            />

            <Dropdown
              options={completionOptions}
              value={formData.completion}
              onChange={(e) =>
                setFormData({ ...formData, completion: e.target.value })
              }
              placeholder="Select your completion status"
            />

            <Dropdown
              options={countryOptions}
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              placeholder="Select your country"
            />
            {formData.degree === "mbbs" && formData.completion === "yes" && (
              <>
                <Input
                  type="text"
                  placeholder="Enter your institute name"
                  value={formData.instituteName}
                  onChange={(e) =>
                    setFormData({ ...formData, instituteName: e.target.value })
                  }
                />

                <Input
                  type="text"
                  placeholder="Enter your medical registration number"
                  value={formData.medicalRegistrationNumber}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      medicalRegistrationNumber: e.target.value,
                    })
                  }
                />
              </>
            )}
            {formData.degree === "mbbs" && formData.completion === "no" && (
              <Dropdown
                options={mbbsYearOptions}
                value={formData.year}
                onChange={(e) =>
                  setFormData({ ...formData, year: e.target.value })
                }
                placeholder="Select your expected completion year"
              />
            )}

            {formData.degree === "pg" && formData.completion === "yes" && (
              <>
                <Input
                  type="text"
                  placeholder="Enter your institute name"
                  value={formData.instituteName}
                  onChange={(e) =>
                    setFormData({ ...formData, instituteName: e.target.value })
                  }
                />
                <Dropdown
                  options={pgdegreeOptions}
                  value={formData.pgdegree}
                  onChange={(e) =>
                    setFormData({ ...formData, pgdegree: e.target.value })
                  }
                  placeholder="Select your pgdegree"
                />
                <Input
                  type="text"
                  placeholder="Enter your medical registration number"
                  value={formData.medicalRegistrationNumber}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      medicalRegistrationNumber: e.target.value,
                    })
                  }
                />
              </>
            )}
            {formData.degree === "pg" && formData.completion === "no" && (
              <>
                <Dropdown
                  options={otherYearOptions}
                  value={formData.year}
                  onChange={(e) =>
                    setFormData({ ...formData, year: e.target.value })
                  }
                  placeholder="Select your expected completion year"
                />
                <Input
                  type="text"
                  placeholder="Enter your institute name"
                  value={formData.instituteName}
                  onChange={(e) =>
                    setFormData({ ...formData, instituteName: e.target.value })
                  }
                />
                <Dropdown
                  options={pgdegreeOptions}
                  value={formData.pgdegree}
                  onChange={(e) =>
                    setFormData({ ...formData, pgdegree: e.target.value })
                  }
                  placeholder="Select your pgdegree"
                />
                <Dropdown
                  options={specialityOptions}
                  value={formData.speciality}
                  onChange={(e) =>
                    setFormData({ ...formData, speciality: e.target.value })
                  }
                  placeholder="Select your speciality"
                />
                <Input
                  type="text"
                  placeholder="Enter your medical registration number"
                  value={formData.medicalRegistrationNumber}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      medicalRegistrationNumber: e.target.value,
                    })
                  }
                />
              </>
            )}

            {formData.degree === "superspeciality" &&
              formData.completion === "yes" && (
                <>
                  <Input
                    type="text"
                    placeholder="Enter your institute name"
                    value={formData.instituteName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        instituteName: e.target.value,
                      })
                    }
                  />
                  <Dropdown
                    options={otherYearOptions}
                    value={formData.year}
                    onChange={(e) =>
                      setFormData({ ...formData, year: e.target.value })
                    }
                    placeholder="Select your expected completion year"
                  />
                  <Dropdown
                    options={specialityOptions}
                    value={formData.speciality}
                    onChange={(e) =>
                      setFormData({ ...formData, speciality: e.target.value })
                    }
                    placeholder="Select your speciality"
                  />
                  <Input
                    type="text"
                    placeholder="Enter your medical registration number"
                    value={formData.medicalRegistrationNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        medicalRegistrationNumber: e.target.value,
                      })
                    }
                  />
                </>
              )}
            {formData.degree === "superspeciality" &&
              formData.completion === "no" && (
                <>
                  <Input
                    type="text"
                    placeholder="Enter your institute name"
                    value={formData.instituteName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        instituteName: e.target.value,
                      })
                    }
                  />
                  <Dropdown
                    options={specialityOptions}
                    value={formData.speciality}
                    onChange={(e) =>
                      setFormData({ ...formData, speciality: e.target.value })
                    }
                    placeholder="Select your speciality"
                  />
                  <Input
                    type="text"
                    placeholder="Enter your medical registration number"
                    value={formData.medicalRegistrationNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        medicalRegistrationNumber: e.target.value,
                      })
                    }
                  />
                </>
              )}

            {formData.degree === "fellowship" &&
              formData.completion === "yes" && (
                <>
                  <Input
                    type="text"
                    placeholder="Enter your institute name"
                    value={formData.instituteName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        instituteName: e.target.value,
                      })
                    }
                  />
                  <Dropdown
                    options={fellowshipOptions}
                    value={formData.fellowship}
                    onChange={(e) =>
                      setFormData({ ...formData, fellowship: e.target.value })
                    }
                    placeholder="Select your fellowship"
                  />
                  <Input
                    type="text"
                    placeholder="Enter your medical registration number"
                    value={formData.medicalRegistrationNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        medicalRegistrationNumber: e.target.value,
                      })
                    }
                  />
                </>
              )}
            {formData.degree === "fellowship" &&
              formData.completion === "no" && (
                <>
                  <Input
                    type="text"
                    placeholder="Enter your institute name"
                    value={formData.instituteName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        instituteName: e.target.value,
                      })
                    }
                  />
                  <Dropdown
                    options={otherYearOptions}
                    value={formData.year}
                    onChange={(e) =>
                      setFormData({ ...formData, year: e.target.value })
                    }
                    placeholder="Select your expected completion year"
                  />
                  <Dropdown
                    options={fellowshipOptions}
                    value={formData.fellowship}
                    onChange={(e) =>
                      setFormData({ ...formData, fellowship: e.target.value })
                    }
                    placeholder="Select your fellowship"
                  />
                  <Input
                    type="text"
                    placeholder="Enter your medical registration number"
                    value={formData.medicalRegistrationNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        medicalRegistrationNumber: e.target.value,
                      })
                    }
                  />
                </>
              )}
            <Button onClick={handleStep2Submit} disabled={!isStep2Valid()}>
              Submit Registration
            </Button>
            {error && (
              <p className="text-red-500 text-md text-center">{error}</p>
            )}
            {success && (
              <p className="text-green-600 text-md text-center">
                Registration successful!
              </p>
            )}
          </div>
        )}
      </div>
    </BackgroundImage>
  );
};

export default RegisterForm;
