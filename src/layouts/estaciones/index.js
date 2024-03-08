// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Overview page components
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Images
import labIot from "assets/images/estaciones/IoT.jpg";
import labDesarrollo from "assets/images/estaciones/lab-desarrollo.jpg";
import labSandwiches from "assets/images/estaciones/sandwiches.jpg";
import labDogos from "assets/images/estaciones/dogos.jpg";
import labRedes from "assets/images/estaciones/lab-redes.jpg";
import labChes from "assets/images/estaciones/chefs.jpg";
import labForense from "assets/images/estaciones/lab-forense.webp";
import siteUtem from "assets/images/estaciones/site-utem.webp";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function Estaciones() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <MDBox pt={2} px={2} lineHeight={1.25}>
        <MDTypography variant="h6" fontWeight="medium">
          Proyectos Monitoreados
        </MDTypography>
        <MDBox mb={1}>
          <MDTypography variant="button" color="text">
            Architects design houses
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultProjectCard
              image={labDesarrollo}
              label="TID"
              title="Laboratorio de desarrollo de software"
              description="Módulo 1. Laboratorio de Informática"
              action={{
                type: "internal",
                route: "/pages/profile/profile-overview",
                color: "info",
                label: "ver proyecto",
              }}
              authors={[
                { image: team2, name: "Perseo Osuna" },
                { image: team4, name: "Gael Hurtado" },
                { image: team3, name: "Kaori Bautista" },
                { image: team4, name: "Hugo Casarrubias" },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultProjectCard
              image={labSandwiches}
              label="Gastro"
              title="Laboratorio de Sandwiches"
              description="El arte poner cosas entre dos panes."
              action={{
                type: "internal",
                route: "/pages/profile/profile-overview",
                color: "info",
                label: "ver proyecto",
              }}
              authors={[
                { image: team2, name: "Perseo Osuna" },
                { image: team1, name: "Kaori Bautista" },
                { image: team3, name: "Cynthia Hernandez" },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultProjectCard
              image={labDogos}
              label="Gastro"
              title="Hot Dogs 2"
              description="El Hot Dog: ¿Más cerca del taco o del sandwich?."
              action={{
                type: "internal",
                route: "/pages/profile/profile-overview",
                color: "info",
                label: "ver proyecto",
              }}
              authors={[
                { image: team2, name: "Perseo Osuna" },
                { image: team4, name: "Gael Hurtado" },
                { image: team3, name: "Kaori Bautista" },
                { image: team4, name: "Hugo Casarrubias" },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultProjectCard
              image={labRedes}
              label="TID"
              title="Laboratorio de Redes"
              description="Modulo 1. Laboratorio de TIC"
              action={{
                type: "internal",
                route: "/pages/profile/profile-overview",
                color: "info",
                label: "ver proyecto",
              }}
              authors={[
                { image: team2, name: "Perseo Osuna" },
                { image: team4, name: "Gael Hurtado" },
                { image: team3, name: "Kaori Bautista" },
                { image: team4, name: "Hugo Casarrubias" },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultProjectCard
              image={siteUtem}
              label="Sistemas"
              title="SITE"
              action={{
                type: "internal",
                route: "/pages/profile/profile-overview",
                color: "info",
                label: "ver proyecto",
              }}
              authors={[
                { image: team2, name: "Perseo Osuna" },
                { image: team4, name: "Gael Hurtado" },
                { image: team3, name: "Kaori Bautista" },
                { image: team4, name: "Hugo Casarrubias" },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultProjectCard
              image={labForense}
              label="TID"
              title="laboratorio de soporte técnico"
              action={{
                type: "internal",
                route: "/pages/profile/profile-overview",
                color: "info",
                label: "ver proyecto",
              }}
              authors={[
                { image: team2, name: "Perseo Osuna" },
                { image: team1, name: "Kaori Bautista" },
                { image: team3, name: "Cynthia Hernandez" },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultProjectCard
              image={labChes}
              label="Gastro"
              title="Cosas de Ché"
              description="Different people have different taste, and various types of music."
              action={{
                type: "internal",
                route: "/pages/profile/profile-overview",
                color: "info",
                label: "ver proyecto",
              }}
              authors={[
                { image: team2, name: "Perseo Osuna" },
                { image: team4, name: "Gael Hurtado" },
                { image: team3, name: "Kaori Bautista" },
                { image: team4, name: "Hugo Casarrubias" },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <DefaultProjectCard
              image={labIot}
              label="TID"
              title="Laboratorio de IoT"
              description="Módulo 1. Aula 9"
              action={{
                type: "internal",
                route: "/pages/profile/profile-overview",
                color: "info",
                label: "ver proyecto",
              }}
              authors={[
                { image: team2, name: "Perseo Osuna" },
                { image: team4, name: "Gael Hurtado" },
                { image: team3, name: "Kaori Bautista" },
                { image: team4, name: "Hugo Casarrubias" },
              ]}
            />
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Estaciones;
