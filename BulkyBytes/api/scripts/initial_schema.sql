create table if not exists users
(
    id serial primary key,
    username varchar(20),
    password varchar(20),
    salt varchar(20),
    email varchar(20)
);

create table if not exists restaurants
(
    id serial primary key,
    name varchar(20)
);

create table if not exists thresholds
(
    restaurant_id integer references restaurants,
    group_size integer,
    discount decimal
);

create table if not exists orders
(
    id serial primary key,
    time_created timestamp,
    time_submitted timestamp,
    time_delivered timestamp,
    restaurant_id integer references restaurants,
    pickup_location point,
    delivery_location point,
    status varchar(20)
);

-- restaurant menu items
create table if not exists menu
(
    id serial primary key,
    restaurant_id integer references restaurants,
    price money,
    name varchar(20),
    description varchar(100),
    image bytea
);

create table if not exists order_menu
(
    order_id integer references orders,
    item_id integer references menu,
    customer_id integer references users,
    quantity integer
);

create table if not exists order_customers
(
    order_id integer references orders,
    customer_id integer references users
);

create table if not exists restaurant_admins
(
    user_id integer references users,
    restaurant_id integer references restaurants,
    permission_level integer
);

create table if not exists sys_admins
(
    user_id integer references users
)