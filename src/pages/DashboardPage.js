import './DashboardPage.css';
import React from "react";
import { Link } from "react-router-dom";
import adminLayout from "../hoc/adminLayout";
import { Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, LineController, LineElement, PointElement, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, LineController, LineElement, PointElement, Tooltip, Legend);

class DashboardPage extends React.Component {
  render() {
    // Sample data for demonstration (replace with actual data from your API)
    const therapistData = {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [
        {
          label: "Therapist A Visits",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#AD8291",
          borderColor: "#AD8291",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#AD8291",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#AD8291",
          pointHoverBorderColor: "#AD8291",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: "Therapist B Visits",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#3A5267",
          borderColor: "#3A5267",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#3A5267",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#3A5267",
          pointHoverBorderColor: "#3A5267",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [28, 48, 40, 19, 86, 27, 90],
        },
        {
          label: "Therapist C Visits",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#8E6C8A",
          borderColor: "#8E6C8A",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#8E6C8A",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#8E6C8A",
          pointHoverBorderColor: "#8E6C8A",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [45, 58, 62, 70, 45, 50, 40],
        },
        // Add more therapists as needed
      ],
    };

    const applicationData = {
      labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
      datasets: [
        {
          label: "Application Visits",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "#3A5267",
          borderColor: "#3A5267",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "#3A5267",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#3A5267",
          pointHoverBorderColor: "#3A5267",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };

    return (
      <div className="dashboard-container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="card text-white bg-custom1 o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-user"></i>
                </div>
                <div className="mr-5">Patients Management</div>
              </div>
              <Link className="card-footer text-white clearfix small z-1" to="/admin/users">
                <span className="float-left">Manage Patient Accounts</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="card text-white bg-custom2 o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-user-md"></i>
                </div>
                <div className="mr-5">Therapist Management</div>
              </div>
              <Link className="card-footer text-white clearfix small z-1" to="/admin/therapists">
                <span className="float-left">Manage therapists</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-3">
            <div className="card text-white bg-custom3 o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-file-text"></i>
                </div>
                <div className="mr-5">Blogs Management</div>
              </div>
              <Link className="card-footer text-white clearfix small z-1" to="/admin/content">
                <span className="float-left">Manage Blogs content</span>
                <span className="float-right">
                  <i className="fa fa-angle-right"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="chart-container">
          <h5 className="chart-header">Therapists accounts Visits </h5>
          <div className="canvas-container">
            <Line data={therapistData} options={{ maintainAspectRatio: false }} />
          </div>
          <div className="legend-container">
            <ul>
              {therapistData.datasets.map((dataset, index) => (
                <li key={index}>
                  <span style={{ backgroundColor: dataset.borderColor }}></span>
                  {dataset.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="chart-container">
          <h5 className="chart-header">Application Visits </h5>
          <div className="canvas-container">
            <Line data={applicationData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    );
  }
}

export default adminLayout(DashboardPage);
