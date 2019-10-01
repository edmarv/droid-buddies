import React from "react";
import "./App.css";

import Card from "./components/Card";
import RoboInfo from "./components/RoboInfo";

class App extends React.PureComponent {
  state = {
    showModal: false,
    selectedUser: null,
    users: []
  };

  async componentDidMount() {
    const payload = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await payload.json();
    this.setState({
      users: data
    });
  }

  onCardClick = user => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      selectedUser: user
    }));
  };

  render() {
    const { selectedUser, users } = this.state;

    return (
      <div style={styles.container}>
        <h1>Droid Buddies</h1>
        <div style={styles.cardContainer}>
          {users.map(user => (
            <Card user={user} onCardClick={() => this.onCardClick(user)} />
          ))}
        </div>
        {this.state.showModal && (
          <RoboInfo selectedUser={selectedUser} onClose={this.onCardClick} />
        )}
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center"
  },
  cardContainer: {
    backgroundColor: "#6EC6FF",
    width: "60%",
    height: "100%",
    borderRadius: 15,
    alignSelf: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  }
};

export default App;
