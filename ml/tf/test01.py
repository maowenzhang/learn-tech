import tensorflow as tf

def l_add():
    a = tf.placeholder(tf.float32)
    b = tf.placeholder(tf.float32)
    c = a + b
    sess = tf.Session()
    print (sess.run(c, {a: [1,2], b : [3,4]}))
    fileWriter = tf.summary.FileWriter('test01', sess.graph)


def l_linearmodel():
    a = tf.Variable([.3], dtype=tf.float32)
    b = tf.Variable([-.3], dtype=tf.float32)
    x = tf.placeholder(tf.float32)
    linearmodel = a * x  + b

    init = tf.global_variables_initializer()

    sess = tf.Session()
    print(sess.run(init))

    print(sess.run(linearmodel, {x : [1,2,3,4]}))

    y = tf.placeholder(tf.float32)
    squared_deltas = tf.square(linearmodel - y)
    loss = tf.reduce_sum(squared_deltas)

    print(sess.run(loss, {x: [1, 2, 3, 4], y: [0, -1, -2, -3]}))

    # fixW = tf.assign(a, [-1.])
    # fixb = tf.assign(b, [1.])
    # print( sess.run([fixW, fixb]) )
    #
    # print(sess.run(loss, {x: [1, 2, 3, 4], y: [0, -1, -2, -3]}))

    optimizer = tf.train.GradientDescentOptimizer(0.01)
    train = optimizer.minimize(loss)

    # sess.run(init)  # reset values to incorrect defaults.
    for i in range(1000):
        sess.run(train, {x: [1, 2, 3, 4], y: [0, -1, -2, -3]})

    print(sess.run([a, b]))


# l_linearmodel()
l_add()