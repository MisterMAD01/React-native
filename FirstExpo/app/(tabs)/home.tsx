import { StyleSheet, Text, View } from "react-native";

// สีหลักส้ม Shopee
const PRIMARY_COLOR = "#EE4D2D";

export default function HomePage() {
  // ลบ import { Link, useRouter } และการประกาศ router ออก

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {/* Title Section */}
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Welcome to E-Shop</Text>
          <Text style={styles.subtitle}>
            Find the best deals and amazing products here!
          </Text>
        </View>

        {/* Informational Card (ไม่มีลิงก์) */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Current Status</Text>
          <Text style={styles.infoText}>
            This is the main landing page. All navigation is handled via the tab
            bar at the bottom.
          </Text>
          <Text style={styles.infoText}>
            You can swipe left or right, or tap on **Shop** or **Cart** below to
            start shopping.
          </Text>
        </View>

        {/* ลบส่วน <Button> ออกทั้งหมด */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f5f5f5",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    maxWidth: 960,
    paddingTop: 0,
    paddingBottom: 50,
  },
  headerContainer: {
    marginBottom: 40,
    marginTop: -50,
  },
  title: {
    fontSize: 36,
    fontWeight: "900",
    color: PRIMARY_COLOR,
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#777",
    textAlign: "center",
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 30,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: PRIMARY_COLOR,
    textAlign: "center",
  },
  infoText: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
    marginBottom: 10,
    textAlign: "center",
  },
  // ลบ linkButton และ linkButtonText styles ออก
});
