const topics = {};

export function subscribe(topic, func) {
  if (topics[topic]) {
    topics[topic].push(func);
  } else {
    topics[topic] = [func];
  }
}

export function unsubscribe(topic, func) {
  if (topics[topic]) {
    topics[topic].splice(topics[topic].indexOf(func), 1);
  }
}

export function publish(topic, args) {
  if (topics[topic]) {
    const callbacks = topics[topic];
    callbacks.forEach((cb) => {
      cb(args);
    });
  }
}
