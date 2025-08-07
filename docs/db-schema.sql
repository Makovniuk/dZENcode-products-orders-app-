CREATE TABLE `orders` (
  `id` int PRIMARY KEY,
  `title` varchar(255),
  `data` date,
  `description` text
);

CREATE TABLE `products` (
  `id` int PRIMARY KEY,
  `title` varchar(255),
  `serialNumber` varchar(255),
  `isNew` boolean,
  `photo` varchar(255),
  `status` varchar(255),
  `specification` text,
  `type` varchar(255),
  `guaranteeStart` date,
  `guaranteeEnd` date,
  `date` date,
  `order_id` int
);

CREATE TABLE `product_prices` (
  `id` int PRIMARY KEY,
  `product_id` int,
  `value` decimal,
  `symbol` varchar(255),
  `isDefault` boolean
);

ALTER TABLE `products` ADD FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

ALTER TABLE `product_prices` ADD FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
