import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
} from "react-native";
import { COLORS, images, icons, SIZES, FONTS } from "../constants";
import { Svg, Polygon } from "react-native-svg";
import { BlurView } from "@react-native-community/blur";
import { SearchBar } from "react-native-screens";

const Home = () => {
  const [showAddToBagModal, setShowAddToBagModal] = useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const [selectedSize, setSelectedSize] = React.useState("");

  useEffect(() => {
    fetchPosts();
    return () => { };
  }, []);

  // Dummy Data

  const [trending, setTrending] = useState([
    {
      id: 0,
      name: "BMW M5 E60",
      img: images.bmwm5,
      bgColor: "#BF012C",
      type: "V10",
      price: "₺800.000.00",
      sizes: [6, 7, 8, 9, 10],
    },
    {
      id: 1,
      name: "Nissan GTR",
      img: images.gtr,
      bgColor: "#D39C67",
      type: "R36",
      price: "₺1.500.000.00",
      sizes: [6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 2,
      name: "Lamborghini Aventedor",
      img: images.lambo,
      bgColor: "#7052A0",
      type: "Lambo",
      price: "₺8.000.000.00",
      sizes: [6, 7, 8, 9],
    },
  ]);
  // Render
  function renderRecentlyViewed(item, index) {
    return (
      <TouchableOpacity
        key={index}
        style={{
          flex: 1,
          flexDirection: "row",
        }}
        onPress={() => {
          console.log("cars yo");
        }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Image
            source={item.img}
            resizeMode="contain"
            style={{
              width: 160,
              height: 140,
            }}
          />
        </View>
        <View
          style={{
            flex: 1.5,
            marginLeft: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ left: 20, color: COLORS.lightGray, ...FONTS.body3 }}>
            {item.name}
          </Text>
          <Text style={{ left: 20, ...FONTS.h3 }}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  function renderTrendingShoes(item, index) {
    return (
      <TouchableOpacity
        key={index}
        style={{
          height: 240,
          width: 180,
          justifyContent: "center",
          marginHorizontal: SIZES.base,
        }}
        onPress={() => {
          setSelectedItem(item);
          setShowAddToBagModal(true);
        }}
      >
        <Text>{item.type}</Text>
        <View
          style={[
            {
              flex: 1,
              justifyContent: "flex-end",
              marginTop: SIZES.base,
              borderRadius: 10,
              marginRight: SIZES.padding,
              paddingLeft: SIZES.radius,
              paddingRight: SIZES.padding,
              paddingBottom: SIZES.radius,
              backgroundColor: item.bgColor,
            },
            styles.trendingShadow,
          ]}
        >
          <View
            style={{
              height: "35%",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
              {item.name}
            </Text>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h3,
              }}
            >
              {item.price}
            </Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            top: 27,
            right: 0,
            width: "95%",
            height: "100%",
          }}
        >
          <Svg height="100%" width="100%">
            <Polygon points="0,0 160,0 160,80" fill="white" />
          </Svg>
        </View>
        <Image
          source={item.img}
          resizeMode="cover"
          style={{
            position: "absolute",
            top: 50,
            width: "87%",
            height: 80,
          }}
        />
      </TouchableOpacity>
    );
  }

  const ApiHamza = ([filterdData, setfilterddata] = useState([
    {
      id: 0,
      name: "Bmw M3",
      img: images.m3,
      bgColor: "#414045",
      type: "Fast",
      price: "₺2.000.000.00",
      sizes: [6, 7, 8],
    },
    {
      id: 1,
      name: "Toyota Supra",
      img: images.supra,
      bgColor: "#4EABA6",
      type: "TRAINING",
      price: "$135",
      sizes: [6, 7, 8, 9, 10, 11],
    },
    {
      id: 2,
      name: "Nissan GTR",
      img: images.gtr,
      bgColor: "#2B4660",
      type: "İmpossible",
      price: "₺6.760.000.00",
      sizes: [6, 7, 8, 9],
    },
    {
      id: 3,
      name: "Bmw M5",
      img: images.bmwm5,
      bgColor: "#A69285",
      type: "V10",
      price: "₺920.000.00",
      sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    },
    {
      id: 4,
      name: "Lamborghini Huracan",
      img: images.lambo,
      bgColor: "#A02E41",
      type: "fast2021",
      price: "₺21.000.000.00",
      sizes: [6, 7, 8, 9, 10, 11],
    },
  ]));
  const [masterdata, setmasterdata] = useState([
    {
      id: 0,
      name: "Bmw M3",
      img: images.m3,
      bgColor: "#414045",
      type: "Fast",
      price: "₺2.000.000.00",
      sizes: [6, 7, 8],
    },
    {
      id: 1,
      name: "Toyota Supra",
      img: images.supra,
      bgColor: "#4EABA6",
      type: "TRAINING",
      price: "$135",
      sizes: [6, 7, 8, 9, 10, 11],
    },
    {
      id: 2,
      name: "Nissan GTR",
      img: images.gtr,
      bgColor: "#2B4660",
      type: "İmpossible",
      price: "₺6.760.000.00",
      sizes: [6, 7, 8, 9],
    },
    {
      id: 3,
      name: "Bmw M5",
      img: images.bmwm5,
      bgColor: "#A69285",
      type: "V10",
      price: "₺920.000.00",
      sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    },
    {
      id: 4,
      name: "Lamborghini Huracan",
      img: images.lambo,
      bgColor: "#A02E41",
      type: "fast2021",
      price: "₺21.000.000.00",
      sizes: [6, 7, 8, 9, 10, 11],
    },
  ]);

  const [search, setsearch] = useState(""); //tamamdır

  //-----------------
  const fetchPosts = () => {
    //const apiURL = "https://jsonplaceholder.typicode.com/posts";

    fetch(ApiHamza)
      .then((response) => response.json())
      .then((responseJson) => {
        setfilterddata(responseJson);
        setmasterdata(responseJson);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchFilter = (text) => {
    if (text) {
      const newData = masterdata.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterddata(newData);
      setsearch(text);
    } else {
      setfilterddata(masterdata);
      setsearch(text);
    }
  };
  //----------------------

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: SIZES.radius,
          marginHorizontal: SIZES.padding,
          ...FONTS.largeTitleBold,
        }}
      >
        TRENDING
      </Text>
      {/* Trending */}

      <View style={{ height: 260, marginTop: SIZES.radius }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={trending}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => renderTrendingShoes(item, index)}
        />
      </View>
      {/* Recently Viewed */}

      <View
        style={[
          {
            flex: 1,
            flexDirection: "row",
            marginTop: SIZES.padding,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: "darkred",
          },
          styles.recentContainerShadow,
        ]}
      >
        <View
          style={{
            width: 70,
            marginLeft: SIZES.base,
          }}
        >
          <Image
            source={images.recently}
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>
        <View style={{ flex: 1, paddingBottom: SIZES.padding }}>
          <View>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Search This Car / Hamzadan.com"
              value={search}
              underlineColorAndroid="transparent"
              onChangeText={(text) => searchFilter(text)}
            />
            <Image
              source={icons.search}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                left: 260,
                top: -44,
              }}
            />
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={filterdData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => renderRecentlyViewed(item, index)}
          />
        </View>
      </View>

      {/* Modal */}
      {selectedItem && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={showAddToBagModal}
        >
          <BlurView
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
            blurType="light"
            blurAmount={20}
            reducedTransparencyFallBackColor="white"
          >
            {/* Button to close modal */}
            <TouchableOpacity
              style={styles.absolute}
              onPress={() => {
                setSelectedItem(null);
                setSelectedSize("");
                setShowAddToBagModal(false);
              }}
            ></TouchableOpacity>
            {/* Modal Content */}
            <View
              style={{
                justifyContent: "center",
                width: "85%",
                backgroundColor: selectedItem.bgColor,
              }}
            >
              <View>
                <Image
                  source={selectedItem.img}
                  resizeMode="contain"
                  style={{
                    width: "90%",
                    height: 170,
                    left: 15,
                  }}
                />
              </View>
              <Text
                style={{
                  marginTop: SIZES.radius,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  fontSize: SIZES.h1,
                }}
              >
                {selectedItem.name}
              </Text>
              <Text
                style={{
                  marginTop: SIZES.radius,
                  marginHorizontal: SIZES.padding,
                  color: COLORS.white,
                  ...FONTS.h1,
                }}
              >
                {selectedItem.price}
              </Text>
              <TouchableOpacity

                style={{
                  width: "100%",
                  height: 70,
                  marginTop: SIZES.base,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "rgba(0,0,0,0.4)",
                }}
                onPress={() => {
                  console.log("buy a car");
                }}
              >
                <Text
                  style={{
                    color: COLORS.white,
                    ...FONTS.largeTitleBold,
                  }}
                >
                  Buy a Car
                </Text>
              </TouchableOpacity>
            </View>
          </BlurView>
        </Modal>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  trendingShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  recentContainerShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  textInputStyle: {
    height: 50,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "#009688",
    backgroundColor: "white",
    width: "80%",
  },
});

export default Home;
