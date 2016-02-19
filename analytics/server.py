import pika
import time

connection = pika.BlockingConnection(pika.ConnectionParameters(host='54.193.57.233'))
channel = connection.channel()

channel.queue_declare(queue='analytics', durable=True)
print(' [*] Waiting for messages. To exit press CTRL+C')

def callback(ch, method, properties, body):
    print(" [x] Received %r" % body)
    time.sleep(3)
    print(" [x] Done")
    ch.basic_ack(delivery_tag = method.delivery_tag)

channel.basic_qos(prefetch_count=1)
channel.basic_consume(callback, queue='analytics')
channel.start_consuming()
