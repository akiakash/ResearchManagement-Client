import {
  Flex,
  Table,
  Checkbox,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Input,
  Button,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";
export default function CheckTable(props) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 11;

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  return (
    <Card
      direction="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex px="25px" justify="space-between" mb="20px" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          fontWeight="700"
          lineHeight="100%"
        >
          Add Theatre
        </Text>
        <Menu />
      </Flex>
      <Table {...getTableProps()} variant="simple" color="gray.500" mb="24px">
        {/* <Thead>
          {headerGroups.map((headerGroup, index) => (
            <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column, index) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  pe="10px"
                  key={index}
                  borderColor={borderColor}
                >
                  <Flex
                    justify="space-between"
                    align="center"
                    fontSize={{ sm: "10px", lg: "12px" }}
                    color="gray.400"
                  >
                    {column.render("Header")}
                  </Flex>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead> */}
        <Tbody>
          <Text
            fontSize="md"
            color="black"
            maxW={{
              base: "100%",
              // md: "64%",
              lg: "40%",
              xl: "56%",
              "2xl": "46%",
              "3xl": "34%",
            }}
            fontWeight="500"
            mb="5px"
            lineHeight="28px"
            ml="20px"
          >
            Theatre Name
          </Text>
          <Input
            placeholder="Enter the Genre"
            ml="20px"
            style={{ width: "90%" }}
          />
          <Text
            fontSize="md"
            color="black"
            maxW={{
              base: "100%",
              // md: "64%",
              lg: "40%",
              xl: "56%",
              "2xl": "46%",
              "3xl": "34%",
            }}
            fontWeight="500"
            mb="5px"
            lineHeight="28px"
            ml="20px"
          >
            Location
          </Text>
          <Input
            placeholder="Enter the Location"
            ml="20px"
            style={{ width: "90%" }}
          />
          <Text
            fontSize="md"
            color="black"
            maxW={{
              base: "100%",
              // md: "64%",
              lg: "40%",
              xl: "56%",
              "2xl": "46%",
              "3xl": "34%",
            }}
            fontWeight="500"
            mb="5px"
            lineHeight="28px"
            ml="20px"
          >
            Contact Number
          </Text>
          <Input
            placeholder="Enter the Contact Number"
            ml="20px"
            style={{ width: "90%" }}
          />

          <Text
            fontSize="md"
            color="black"
            maxW={{
              base: "100%",
              // md: "64%",
              lg: "40%",
              xl: "56%",
              "2xl": "46%",
              "3xl": "34%",
            }}
            fontWeight="500"
            mb="5px"
            lineHeight="28px"
            ml="20px"
          >
            Show Time
          </Text>
          <Input type="time" ml="20px" style={{ width: "90%" }} />

          <Button
            bg="#6b4fe8"
            color="black"
            _hover={{ bg: "whiteAlpha.900" }}
            _active={{ bg: "white" }}
            _focus={{ bg: "white" }}
            fontWeight="500"
            fontSize="14px"
            py="20px"
            px="27"
            me="38px"
            mt="40px"
            ml="20px"
          >
            Submit
          </Button>
        </Tbody>
      </Table>
    </Card>
  );
}
