/*
 Source Server         : PRASETYO
 Source Server Type    : MySQL
 Source Server Version : 50719 (5.7.19)
 Source Host           : localhost:3306
 Source Schema         : todo4
 
 Target Server Type    : MySQL
 Target Server Version : 50719 (5.7.19)
 File Encoding         : 65001
 
 Date: 02/12/2022 20:04:42
 */
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
-- ----------------------------
-- Table structure for activity_groups
-- ----------------------------
DROP TABLE IF EXISTS `activity_groups`;
CREATE TABLE `activity_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;
-- ----------------------------
-- Records of activity_groups
-- ----------------------------
INSERT INTO `activity_groups`
VALUES (
    1,
    'XXX 1',
    'wow@gmail.com',
    '2022-12-02 04:52:36',
    '2022-12-02 04:52:36',
    NULL
  );
INSERT INTO `activity_groups`
VALUES (
    2,
    'testing update',
    'wow@gmail.com',
    '2022-12-02 04:55:04',
    '2022-12-02 05:12:28',
    '2022-12-02 05:24:44'
  );
INSERT INTO `activity_groups`
VALUES (
    3,
    'ACT 1.1',
    'wow@gmail.com',
    '2022-12-02 05:26:10',
    '2022-12-02 07:16:13',
    NULL
  );
INSERT INTO `activity_groups`
VALUES (
    4,
    'ACTIVITY 4',
    'wow@gmail.com',
    '2022-12-02 07:14:54',
    '2022-12-02 07:14:54',
    '2022-12-02 07:15:48'
  );
-- ----------------------------
-- Table structure for todo_items
-- ----------------------------
DROP TABLE IF EXISTS `todo_items`;
CREATE TABLE `todo_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `activity_group_id` int(255) NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `is_active` tinyint(1) NULL DEFAULT NULL,
  `priority` enum('very-high', 'high', 'medium', 'low', 'very-low') CHARACTER SET latin1 COLLATE latin1_swedish_ci NULL DEFAULT NULL,
  `created_at` datetime NULL DEFAULT NULL,
  `updated_at` datetime NULL DEFAULT NULL,
  `deleted_at` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;
-- ----------------------------
-- Records of todo_items
-- ----------------------------
INSERT INTO `todo_items`
VALUES (
    1,
    3,
    'item 3.1.2',
    1,
    'very-low',
    '2022-12-02 06:01:20',
    '2022-12-02 07:19:30',
    NULL
  );
INSERT INTO `todo_items`
VALUES (
    2,
    3,
    'item 3.2',
    1,
    'medium',
    '2022-12-02 06:02:40',
    '2022-12-02 06:02:40',
    NULL
  );
INSERT INTO `todo_items`
VALUES (
    3,
    1,
    'item 1.1',
    1,
    'very-high',
    '2022-12-02 06:03:07',
    '2022-12-02 06:03:07',
    NULL
  );
INSERT INTO `todo_items`
VALUES (
    4,
    1,
    'item 1.2',
    1,
    'very-high',
    '2022-12-02 06:03:19',
    '2022-12-02 06:03:19',
    '2022-12-02 07:09:57'
  );
INSERT INTO `todo_items`
VALUES (
    5,
    1,
    'item 1.3',
    1,
    'very-high',
    '2022-12-02 06:03:22',
    '2022-12-02 06:03:22',
    NULL
  );
INSERT INTO `todo_items`
VALUES (
    6,
    1,
    'item 1.4',
    1,
    'very-high',
    '2022-12-02 06:03:27',
    '2022-12-02 06:03:27',
    NULL
  );
SET FOREIGN_KEY_CHECKS = 1;