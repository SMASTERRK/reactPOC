import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../App.css';
const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#673ab7',
    color: theme.palette.common.white,
    fontSize: 18,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    maxWidth: '100%',
    overflowX: 'auto',
    paddingTop: 50,
    paddingLeft: 50,
    paddingRight: 50,
  },
  table: {
    maxWidth: '50%',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  
});

let id = 0;
function createData(Org_ID, Name, Project_Name, Shore_Details) {
  id += 1;
  return { id, Org_ID, Name, Project_Name, Shore_Details};
}

const rows = [
  createData('620001', 'Ramkumar R', 'NextGen_Stab', 'OF'),
   createData('620003', 'Nancy Sheeba Rani', 'NextGen_RCV', 'OF'),
    createData('620004', 'Krishna LV', 'NextGen_Stab', 'ON'),
     createData('620005', 'Epsi Vennila', 'NextGen_Stab', 'OF'),
      createData('620002', 'Anjali Sharma', 'NextGen', 'OF'),

];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} id="example3">
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Org_ID</CustomTableCell>
            <CustomTableCell numeric>Name</CustomTableCell>
            <CustomTableCell numeric>Project_Name</CustomTableCell>
            <CustomTableCell numeric>Shore_Details</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                 {row.Org_ID}
                </CustomTableCell>
                <CustomTableCell numeric>{row.Name}</CustomTableCell>
                <CustomTableCell numeric>{row.Project_Name}</CustomTableCell>
                <CustomTableCell numeric>{row.Shore_Details}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);