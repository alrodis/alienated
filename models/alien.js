module.exports = function(sequelize, DataTypes) {
  var Sighting = sequelize.define("Sightings", {
    city: {
      type: DataTypes.STRING,
      allowNull: true
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    shape:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    duration_seconds:{
      type: DataTypes.INTEGER,
      allowNull: true
    }, 
    duration_minutes:{
      type: DataTypes.INTEGER,
      allowNull: true
    },
    comments:{
      type: DataTypes.STRING,
      allowNull: true
    },
    date_of_sighting:{
      type: DataTypes.DATE,
      allowNull: true
    },
    lat: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    long:{
      type: DataTypes.DECIMAL,
      allowNull: true
    }
  },{
     timestamps: false
  });
  return Sighting;
};