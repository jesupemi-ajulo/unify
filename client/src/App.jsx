import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Onboarding from "./pages/Auth/Onboarding";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import AppLayout from "./components/layout/AppLayout";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import EventDetail from "./pages/Events/EventDetail";
import CreateEvent from "./pages/Events/CreateEvent";
import Opportunities from "./pages/Opportunities/Opportunities";
import More from "./pages/More/More";
import PostOpportunity from "./pages/Opportunities/PostOpportunity";
import Marketplace from "./pages/Marketplace/Marketplace";
import ListingDetail from "./pages/Marketplace/ListingDetail";
import CreateListing from "./pages/Marketplace/CreateListing";
import Clubs from "./pages/Clubs/Clubs";
import ClubDetail from "./pages/Clubs/ClubDetail";
import CreateClub from "./pages/Clubs/CreateClub";
import Noticeboard from "./pages/Noticeboard/Noticeboard";
import CreateNotice from "./pages/Noticeboard/CreateNotice";
import Resources from "./pages/Resources/Resources";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppLayout>
                <Home />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/events"
          element={
            <ProtectedRoute>
              {" "}
              <AppLayout>
                <Events />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/events/create"
          element={
            <ProtectedRoute>
              <AppLayout>
                <CreateEvent />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/events/:id"
          element={
            <ProtectedRoute>
              <AppLayout>
                <EventDetail />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/onboarding"
          element={
            <ProtectedRoute>
              <Onboarding />
            </ProtectedRoute>
          }
        />
        <Route
          path="/opportunities"
          element={
            <ProtectedRoute>
              {" "}
              <AppLayout>
                <Opportunities />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/more"
          element={
            <ProtectedRoute>
              {" "}
              <AppLayout>
                <More />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/opportunities/create"
          element={
            <ProtectedRoute>
              {" "}
              <AppLayout>
                <PostOpportunity />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/marketplace"
          element={
            <ProtectedRoute>
              {" "}
              <AppLayout>
                <Marketplace />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/marketplace/create"
          element={
            <ProtectedRoute>
              {" "}
              <AppLayout>
                <CreateListing />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/marketplace/:id"
          element={
            <ProtectedRoute>
              {" "}
              <AppLayout>
                <ListingDetail />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/clubs"
          element={
            <ProtectedRoute>
              {" "}
              <AppLayout>
                <Clubs />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/clubs/create"
          element={
            <ProtectedRoute>
              {" "}
              <AppLayout>
                <CreateClub />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/clubs/:id"
          element={
            <ProtectedRoute>
              {" "}
              <AppLayout>
                <ClubDetail />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/noticeboard"
          element={
            <ProtectedRoute>
              {" "}
              <AppLayout>
                <Noticeboard />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/noticeboard/create"
          element={
            <ProtectedRoute>
              <AppLayout>
                <CreateNotice />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/resources"
          element={
            <ProtectedRoute>
              {" "}
              <AppLayout>
                <Resources />
              </AppLayout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
