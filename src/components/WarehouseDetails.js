import React, { useEffect, useState } from "react";
import "./css/WarehouseDetails.css"; // Import the CSS file

const WarehouseDetails = (props) => {
  const [search, setSearch] = useState('');
  const [filterBy, setFilterBy] = useState('city'); // Default filter by city
  const [filterValue, setFilterValue] = useState('');
  const [filteredData, setFilteredData] = useState(props.warehouses);
  const [isEditing, setIsEditing] = useState(false);
  const [editWarehouse, setEditWarehouse] = useState(null);

  const handleEditClick = (warehouse) => {
    setIsEditing(true);
    setEditWarehouse(warehouse);
  };

  const handleSaveChanges = () => {
    if (editWarehouse.spaceAvailable < 0) {
      alert("Space Available cannot be negative.");
      return;
    }

    // Implement the logic to save the updated data here
    // You can send a request to update the data on your server or modify the state.

    // After saving the changes, close the edit modal and update the data.
    setIsEditing(false);
    setFilteredData((prevData) => {
      return prevData.map((item) =>
        item.id === editWarehouse.id ? editWarehouse : item
      );
    });
  };

  useEffect(() => {
    // Filter data based on the selected filter and filter value
    const filteredResult = props.warehouses.filter((item) => {
      if (filterBy === 'city') {
        return item.city.toLowerCase().includes(filterValue.toLowerCase());
      } else if (filterBy === 'cluster') {
        return item.cluster.toLowerCase().includes(filterValue.toLowerCase());
      } else if (filterBy === 'spaceAvailable') {
        return item.spaceAvailable >= parseInt(filterValue);
      }
      return true;
    });

    setFilteredData(filteredResult);
  }, [search, filterBy, filterValue, props.warehouses]);

  return (
    <>
      <div className="filter-options">
        <label>
          <input
            type="radio"
            name="filter"
            value="city"
            checked={filterBy === 'city'}
            onChange={() => setFilterBy('city')}
          />
          Filter by City
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="cluster"
            checked={filterBy === 'cluster'}
            onChange={() => setFilterBy('cluster')}
          />
          Filter by Cluster
        </label>
        <label>
          <input
            type="radio"
            name="filter"
            value="spaceAvailable"
            checked={filterBy === 'spaceAvailable'}
            onChange={() => setFilterBy('spaceAvailable')}
          />
          Filter by Space Available
        </label>
        <input
          type="text"
          placeholder="Filter Value"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
      </div>
      <div className="warehouse-details">
        <h1>Warehouse Details</h1>
        <table className="warehouse-table">
          <thead>
            <tr>
              <th>Warehouse Name</th>
              <th>Code</th>
              <th>ID</th>
              <th>City</th>
              <th>Space Available</th>
              <th>Type</th>
              <th>Cluster</th>
              <th>Is Registered</th>
              <th>Is Live</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((warehouse, index) => (
              <tr key={index}>
                <td>{warehouse.name}</td>
                <td>{warehouse.code}</td>
                <td>{warehouse.id}</td>
                <td>{warehouse.city}</td>
                <td>{warehouse.spaceAvailable}</td>
                <td>{warehouse.type}</td>
                <td>{warehouse.cluster}</td>
                <td>{warehouse.isRegistered ? "Yes" : "No"}</td>
                <td>{warehouse.isLive ? "Yes" : "No"}</td>
                <td>
                  <button onClick={() => handleEditClick(warehouse)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isEditing && editWarehouse && (
        <div className="edit-modal">
          <h2>Edit Warehouse</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="edit-cluster">Cluster:</label>
              <input
                type="text"
                id="edit-cluster"
                value={editWarehouse.cluster}
                onChange={(e) =>
                  setEditWarehouse({ ...editWarehouse, cluster: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="edit-name">Warehouse Name:</label>
              <input
                type="text"
                id="edit-name"
                value={editWarehouse.name}
                onChange={(e) =>
                  setEditWarehouse({ ...editWarehouse, name: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="edit-city">City:</label>
              <input
                type="text"
                id="edit-city"
                value={editWarehouse.city}
                onChange={(e) =>
                  setEditWarehouse({ ...editWarehouse, city: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="edit-spaceAvailable">Space Available:</label>
              <input
                type="number"
                id="edit-spaceAvailable"
                value={editWarehouse.spaceAvailable}
                onChange={(e) =>
                  setEditWarehouse({
                    ...editWarehouse,
                    spaceAvailable: parseInt(e.target.value)
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="edit-isLive">Is Live:</label>
              <select
                id="edit-isLive"
                value={editWarehouse.isLive ? "Yes" : "No"}
                onChange={(e) =>
                  setEditWarehouse({
                    ...editWarehouse,
                    isLive: e.target.value === "Yes"
                  })
                }
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <button onClick={handleSaveChanges}>Save Changes</button>
          </form>
        </div>
      )}
    </>
  );
};

export default WarehouseDetails;
