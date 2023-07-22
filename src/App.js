import HomePage from "./pages/HomePage";
import Casestudies from "./components/Projects/Casestudies";
import AboutInfopage from "./pages/AboutInfoPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/AdminLoginPage";
import "./App.css";
import ScrollToTop from "./common/ScrollToTop";
import DashBoardPage from "./pages/DashboardPage";
import AllprojectPage from "./pages/AllprojectsPage";
import { createTheme, ThemeProvider } from "@material-ui/core";
import BlogsFormPage from "./pages/BlogsFormPage";
import BlogsViewPage from "./pages/BlogsViewPage";
import BlogContentPage from "./pages/BlogsContentPage";
import EditBlogsPage from "./pages/EditBlogPage";
import EditContactPage from "./pages/EditContactPage";
import Guard from "./Guard";
import Unauthorized from "./components/Unauthorized";
import ProfileSectionPage from "./pages/ProfileSectionPage";
import AdminContactPage from "./pages/AdminContactPage";
import ClientBlogsShowPage from "./pages/ClientBlogsShowPage";
import ClientBlogsContent from "./pages/ClientBlogsContent";

const theme = createTheme({
  typography: {
    fontFamily: ["Anton", "sans-serif"].join(","),
  },
});

function App() {
  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<Casestudies />} />
              <Route path="/about" element={<AboutInfopage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route exact path="/login" element={<LoginPage />} />
              <Route exact path="/services" element={<ServicesPage />} />
              <Route exact path="/allprojects" element={<AllprojectPage />}>
                <Route exact path=":courseid" element={<AllprojectPage />} />
              </Route>
              <Route exact path="/blogs" element={<ClientBlogsShowPage />} />
              <Route exact path="/blogsall" element={<ClientBlogsContent />} />
              <Route path="/unauthorized" element={<Unauthorized />} />

              <Route element={<Guard />}>
                <Route exact path="/dashboard" element={<DashBoardPage />} />
                <Route exact path="/allblogs" element={<BlogsViewPage />} />
                <Route exact path="/blogsform" element={<BlogsFormPage />} />
                <Route
                  exact
                  path="/blogscontent"
                  element={<BlogContentPage />}
                />
                <Route exact path="/editBlogs" element={<EditBlogsPage />}>
                  <Route exact path=":blogsId" element={<EditBlogsPage />} />
                </Route>
                {/* <Route exact path="/drafts" element={<BlogsDraftPage />} /> */}
                <Route exact path="/contacts" element={<AdminContactPage />} />
                <Route exact path="/profile" element={<ProfileSectionPage />} />
                <Route exact path="/editContact" element={<EditContactPage />}>
                  <Route
                    exact
                    path=":contactId"
                    element={<EditContactPage />}
                  />
                </Route>
              </Route>
            </Routes>
          </ScrollToTop>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
