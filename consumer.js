const kafka = require("kafka-node");
const config = require("./config");

try {
  const Consumer = kafka.Consumer;
  const client = new kafka.KafkaClient({
    kafkaHost: "localhost:9093, localhost:9094"
  });
  consumer = new Consumer(client, [{ topic: config.kafka_topic }], {
    autoCommit: false
  });
  consumer.on("message", message => {
    console.log(message);
  });
} catch (e) {
  console.log(e);
}
