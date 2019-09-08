import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import { browserHistory} from 'react-router';


class SimpleMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div >

        <MenuIcon
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          
          <MenuItem onClick={() => {browserHistory.push('/employee');this.handleClose();}}>Employee Screen </MenuItem>
            <MenuItem onClick={() => {browserHistory.push('/reports');this.handleClose();}}> Report Screen</MenuItem>
            <MenuItem onClick={() => {browserHistory.push('/');this.handleClose();}}>Log Out</MenuItem>
         
        </Menu>
       
      </div>
    );
  }
}

export default SimpleMenu;
