import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Switch,
  TouchableOpacity,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
import Slider from "react-native-slider";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      idade: "",
      sexo: 0,
      sexos: [
        { key: 1, sexo: "Masculino" },
        { key: 1, sexo: "Feminio" },
      ],
      valor: 500,
      estudante: false,
    };
    this.enviar = this.enviar.bind(this);
  }

  enviar() {
    if (this.state.nome === "" || this.state.idade == "") {
      alert("Preencha todos os dados ");
      return;
    } else {
      alert(
        "Conta feita com sucesso!!!\n\n Nome: " +
          this.state.nome +
          "\n\n Idade: " +
          this.state.idade +
          "\n\nSexo: " +
          this.state.sexos[this.state.sexo].sexo +
          "\n\nLimite do seu saldo :" +
          this.state.valor.toFixed(2) +
          (this.state.estudante ? "\n\nEstudante" : "")
      );
    }
  }

  render() {
    let genero = this.state.sexos.map((item, index) => {
      return <Picker.item key={index} value={index} label={item.sexo} />;
    });
    return (
      <View style={styles.container}>
        <View style={styles.texto}>
          <TextInput
            value={this.state.nome}
            placeholder="Adicione seu nome"
            onChangeText={(nome) => this.setState({ nome: nome })}
            style={styles.campo}
          />
          <TextInput
            value={this.state.idade}
            placeholder="Adcione sua idade"
            onChangeText={(idade) => this.setState({ idade: idade })}
            style={styles.campo}
          ></TextInput>
        </View>
        <View style={styles.pegar}>
          <Text>Selecione seu sexo:</Text>
          <Picker
            selectedValue={this.state.sexo}
            onValueChange={(itemValue, intemIndex) =>
              this.setState({ sexo: itemValue })
            }
          >
            {genero}
          </Picker>
        </View>
        <View style={styles.barra}>
          <Text>Defina o limite para seu saldo</Text>
          <Slider
            minimumValue={500}
            maximumValue={3000}
            onValueChange={(valor) => this.setState({ valor: valor })}
            value={this.state.valor}
            minimumTrackTintColor="blue"
            maximumTrackTintColor="red"
          />
          <Text>
            Seu limite vai ser:R$ {this.state.valor.toFixed(2)} reais{" "}
          </Text>
        </View>
        <View style={styles.fim}>
          <Switch
            value={this.state.estudante}
            onValueChange={(estudante) =>
              this.setState({ estudante: estudante })
            }
            thumbColor="blue"
          />
          <Text>Estudante</Text>
          <View style={styles.render}>
            <Text>
              {this.state.estudante ? "Você selecionou estudante" : ""}
            </Text>
          </View>
        </View>
        <View style={styles.botao}>
          <TouchableOpacity onPress={this.enviar}>
            <View>
              <Text>Prosseguir</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAFA",
    margin: 0,
    padding: 0,
  },
  texto: {
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 130,
  },
  campo: {
    borderWidth: 4,
    color: "black",
    backgroundColor: "white",
    width: 300,
    height: 40,
    margin: 10,
    textAlign: "center",
  },
  pegar: {
    flexDirection: "column",
    padding: 90,
    justifyContent: "flex-start",
    marginTop: -30,
  },
  sexo: {
    fontSize: 30,
    color: "black",
    fontFamily: "lining-nums",
  },
  barra: {
    justifyContent: "flex-start",
    width: 300,
    marginTop: -50,
    marginLeft: 50,
  },
  fim: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  render: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    margin: 20,
  },
  botao: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    marginTop: 30,
    marginLeft: 150,
    width: 100,
    height: 30,
    borderWidth: 2,
    borderRadius: 25,
    borderColor: "orange",
  },
});
