const kafka = require("kafka-node");
const config = require("./config");

try {
  const Producer = kafka.Producer;
  const client = new kafka.KafkaClient({
    kafkaHost: "localhost:9093, localhost:9094"
  });
  const producer = new Producer(client);
  let payloads = [
    {
      topic: config.kafka_topic,
      messages: "hello world"
    }
  ];
  producer.on("ready", () => {
    producer.send(payloads, (err, data) => {
      if (err) {
        console.log(
          `[kafka-producer -> ${config.kafka_topic}]: broker update failed`
        );
      } else {
        console.log(
          `[kafka-producer -> ${config.kafka_topic}]: broker update success`
        );
      }
    });
  });
} catch (e) {
  console.log(e);
}
