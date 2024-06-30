import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardFooter } from "@/src/components/ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { useState } from "react";
import StockCard, { StockCardProps } from "../cards/StockCard";

function StockList() {
  const [stocks] = useState<StockCardProps[]>([]);
  return (
    <Card className="mt-4">
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Stock</TableHead>
              <TableHead className="w-[100px]">Size</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <StockCard index={1000} stocks={3} size="M" />
            {stocks.map((item: StockCardProps, index) => (
              <StockCard
                key={index}
                index={index}
                stocks={item.stocks}
                size={item.size}
              />
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="justify-center border-t p-4">
        <Button size="sm" variant="ghost" className="gap-1">
          <img src="/icons/plus-circle.svg" className="h-3.5 w-3.5" />
          Add Variant
        </Button>
      </CardFooter>
    </Card>
  );
}
export default StockList;
