# Warehouse Management System

This README file provides an overview of a Warehouse Management System (WMS) that lists warehouses and allows users to view warehouse details, search for warehouses, and filter them based on various criteria.

## Page 1: Warehouse Listing

### Overview

Page 1 provides a listing of warehouses in the most optimal and modular way possible. It offers features for searching and filtering warehouses based on different attributes. The data for the warehouses is sourced from the `warehouses.json` file shared with this project.

### Features

- **Search Functionality**: Users can search for warehouses by the warehouse name, allowing for quick and easy retrieval of specific warehouses.

- **Filtering Warehouses**: Users can filter warehouses based on the following criteria:
  - **City**: Users can select a specific city to filter the warehouses, helping to narrow down the search results based on geographical location. [Step one Link - "[Filter By City]https://drive.google.com/file/d/1qaKyEFHfz_B0uvWQUEEDQhgHAhQ_eFG4/view?usp=sharing"]
  - **Cluster**: Users can filter warehouses based on the cluster they belong to, helping to group warehouses with similar characteristics. [Step Two Link - "[Filter By Cluster](https://drive.google.com/file/d/170FYSCSJJbsn4XXqgkRyEM7ZSLW_RWNm/view?usp=sharing)"]
  - **Space Available Limit**: Warehouses can be filtered based on the available space, allowing users to find warehouses that meet their storage requirements.
  - **Space Available Limit Note :**:  When editing the "Space Available" attribute, please ensure that the value cannot be negative. Please keep this in mind while making any changes.[Not negative](https://drive.google.com/file/d/192XVe1353aphnknpSBeAs3_6y8ONX1py/view?usp=sharing)

### Data Source

The data for the warehouses is provided in the `warehouses.json` file, and it is used to populate the listing page. The file contains information about each warehouse, including warehouse name, city, cluster, space available, and warehouse live status.

### Technology Stack

- Frontend: React.js
- Database: JSON (warehouses.json)

## Page 2: Warehouse Details

### Overview

Page 2 allows users to click on a specific warehouse in the listing and be redirected to a dedicated warehouse details page. On this page, users can view detailed information about the selected warehouse and also edit certain warehouse details.

### Features

- **View Warehouse Details**: Users can view detailed information about the selected warehouse, including the following attributes:
  - Warehouse Name
  - City
  - Cluster
  - Space Available
  - Warehouse Live Status

- **Edit Warehouse Information**: The details page provides an edit functionality, allowing users to modify the following warehouse information:
  - Cluster
  - Warehouse Name
  - City
  - Space Available
  - Warehouse Live Status

### Data Source

The data for the warehouse details is retrieved from the `warehouses.json` file and displayed on the details page. When users make changes to the warehouse details, those changes can be saved and updated in the JSON file if necessary.

## Getting Started

To run this Warehouse Management System, follow these steps:

1. **Download the Repository**: Download the code repository that includes the necessary code files and the `warehouses.json` data file.

2. **Set Up the Environment**: Make sure you have a suitable web development environment, such as a web server or a local development environment, to run the system.

3. **Run the Application**: Run the application on your chosen environment.

4. **Access the Warehouse Listing**: Visit the URL corresponding to Page 1 to access the warehouse listing. [Preview Page Link - "[Front page](https://drive.google.com/file/d/1ZGgLxWaww5Q_glWNVD2esiMp2LCQhDlj/view?usp=sharing)"]

5. **View and Edit Warehouse Details**: Click on a specific warehouse in the listing to access the details page. You can view and edit the warehouse information on this page.

6. **Save Changes**: If you make any edits to the warehouse details, you can save the changes, and they will be reflected in the `warehouses.json` data file if needed. [File After Changes Link - "bdvsaadsfdbvxcdv.com"]

That's it! You now have a Warehouse Management System with a listing page and detailed warehouse information with editing capabilities.

## Developer Information

- Developed and designed by Manish Chandrakar
- Email: manishchandrakar2001@gmail.com
- LinkedIn: [Manish Chandrakar LinkedIn](https://www.linkedin.com/in/manish-chandrakar-23392b183/)

