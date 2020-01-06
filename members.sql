/*
 Navicat Premium Data Transfer

 Source Server         : MINE
 Source Server Type    : MySQL
 Source Server Version : 100406
 Source Host           : localhost:3306
 Source Schema         : apigular

 Target Server Type    : MySQL
 Target Server Version : 100406
 File Encoding         : 65001

 Date: 06/11/2019 14:01:39
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for members
-- ----------------------------
DROP TABLE IF EXISTS `members`;
CREATE TABLE `members`  (
  `mem_id` int(11) NOT NULL AUTO_INCREMENT,
  `mem_name` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `mem_email` varchar(45) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `mem_address` text CHARACTER SET utf8 COLLATE utf8_bin NULL,
  `mem_phone` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `mem_created` datetime(0) NOT NULL DEFAULT current_timestamp(),
  `mem_updated` timestamp(0) NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`mem_id`) USING BTREE,
  UNIQUE INDEX `mem_phone`(`mem_phone`) USING BTREE,
  UNIQUE INDEX `mem_email`(`mem_email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 21 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of members
-- ----------------------------
INSERT INTO `members` VALUES (6, 'page6', 'page6@mail.com', 'page6home', '006', '2019-10-21 14:28:56', '2019-10-21 14:28:56');
INSERT INTO `members` VALUES (7, 'page7', 'page7@mail.com', 'page7home', '007', '2019-10-21 14:28:56', '2019-10-21 14:28:56');
INSERT INTO `members` VALUES (8, 'page8', 'page8@mail.com', 'page8home', '008', '2019-10-21 14:28:56', '2019-10-21 14:28:56');
INSERT INTO `members` VALUES (9, 'page9', 'page9@mail.com', 'page9home', '009', '2019-10-21 14:28:56', '2019-10-21 14:28:56');
INSERT INTO `members` VALUES (10, 'page10', 'page10@mail.com', 'page10home', '010', '2019-10-21 14:28:56', '2019-10-21 14:28:56');
INSERT INTO `members` VALUES (11, 'page11', 'page11@mail.com', 'page11home', '0011', '2019-10-21 14:28:56', '2019-10-21 14:28:56');
INSERT INTO `members` VALUES (12, 'page12', 'page12@mail.com', 'page12home', '0012', '2019-10-21 14:28:56', '2019-10-21 14:28:56');
INSERT INTO `members` VALUES (13, 'page13', 'page13@mail.com', 'page13home', '0013', '2019-10-21 14:28:56', '2019-10-21 14:28:56');
INSERT INTO `members` VALUES (14, 'page14', 'page14@mail.com', 'page14home', '0014', '2019-10-21 14:28:56', '2019-10-21 14:28:56');
INSERT INTO `members` VALUES (15, 'page15', 'page15@mail.com', 'page15home', '0015', '2019-10-21 14:28:56', '2019-10-21 14:28:56');
INSERT INTO `members` VALUES (16, 'page16', 'page16@mail.com', 'page16home', '0016', '2019-10-21 14:28:56', '2019-10-21 14:28:56');
INSERT INTO `members` VALUES (17, 'page17', 'page17@mail.com', 'page17home', '0017', '2019-10-21 14:28:56', '2019-10-21 14:28:56');
INSERT INTO `members` VALUES (18, 'page18', 'page18@mail.com', 'page18home', '0018', '2019-10-21 14:28:56', '2019-10-21 14:28:56');
INSERT INTO `members` VALUES (19, 'page19', 'page19@mail.com', 'page19home', '0019', '2019-10-21 14:28:56', '2019-10-21 14:28:56');
INSERT INTO `members` VALUES (20, 'page20', 'page20@mail.com', 'page20home', '0020', '2019-10-21 14:28:56', '2019-10-21 14:28:56');

SET FOREIGN_KEY_CHECKS = 1;
