import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";

enum CryptoMerchType {
  // Apparel
  TSHIRT = "T-Shirt",
  HOODIE = "Hoodie",
  CAP = "Cap",
  SOCKS = "Socks",

  // Accessories
  PHONE_CASE = "Phone Case",
  LAPTOP_SLEEVE = "Laptop Sleeve",
  STICKER_PACK = "Sticker Pack",
  PIN_BADGE = "Pin Badge",
  TOTE_BAG = "Tote Bag",

  // Tech Accessories
  MOUSE_PAD = "Mouse Pad",
  USB_DRIVE = "USB Drive",
  WIRELESS_CHARGER = "Wireless Charger",

  // Drinkware
  COFFEE_MUG = "Coffee Mug",
  WATER_BOTTLE = "Water Bottle",

  // Home & Office
  POSTER = "Poster",
  NOTEBOOK = "Notebook",
  DESK_MAT = "Desk Mat",

  // Crypto-specific
  HARDWARE_WALLET_CASE = "Hardware Wallet Case",
  CRYPTO_COIN_REPLICA = "Crypto Coin Replica",
  BLOCKCHAIN_ART_PRINT = "Blockchain Art Print",

  // Limited Editions
  SIGNED_WHITEPAPER = "Signed Whitepaper",
  COMMEMORATIVE_COIN = "Commemorative Coin",

  // Digital Products
  DIGITAL_ASSET_PACK = "Digital Asset Pack",
  NFT_ARTWORK = "NFT Artwork",
}

interface CryptoMerchSelectProps {
  value: string;
  onChange: (value: string) => void;
}
export function CryptoMerchSelect({ value, onChange }: CryptoMerchSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[280px my-5 w-full">
        <SelectValue placeholder="Select a merchandise type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Apparel</SelectLabel>
          <SelectItem value={CryptoMerchType.TSHIRT}>
            {CryptoMerchType.TSHIRT}
          </SelectItem>
          <SelectItem value={CryptoMerchType.HOODIE}>
            {CryptoMerchType.HOODIE}
          </SelectItem>
          <SelectItem value={CryptoMerchType.CAP}>
            {CryptoMerchType.CAP}
          </SelectItem>
          <SelectItem value={CryptoMerchType.SOCKS}>
            {CryptoMerchType.SOCKS}
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Accessories</SelectLabel>
          <SelectItem value={CryptoMerchType.PHONE_CASE}>
            {CryptoMerchType.PHONE_CASE}
          </SelectItem>
          <SelectItem value={CryptoMerchType.LAPTOP_SLEEVE}>
            {CryptoMerchType.LAPTOP_SLEEVE}
          </SelectItem>
          <SelectItem value={CryptoMerchType.STICKER_PACK}>
            {CryptoMerchType.STICKER_PACK}
          </SelectItem>
          <SelectItem value={CryptoMerchType.PIN_BADGE}>
            {CryptoMerchType.PIN_BADGE}
          </SelectItem>
          <SelectItem value={CryptoMerchType.TOTE_BAG}>
            {CryptoMerchType.TOTE_BAG}
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Tech Accessories</SelectLabel>
          <SelectItem value={CryptoMerchType.MOUSE_PAD}>
            {CryptoMerchType.MOUSE_PAD}
          </SelectItem>
          <SelectItem value={CryptoMerchType.USB_DRIVE}>
            {CryptoMerchType.USB_DRIVE}
          </SelectItem>
          <SelectItem value={CryptoMerchType.WIRELESS_CHARGER}>
            {CryptoMerchType.WIRELESS_CHARGER}
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Drinkware</SelectLabel>
          <SelectItem value={CryptoMerchType.COFFEE_MUG}>
            {CryptoMerchType.COFFEE_MUG}
          </SelectItem>
          <SelectItem value={CryptoMerchType.WATER_BOTTLE}>
            {CryptoMerchType.WATER_BOTTLE}
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Home & Office</SelectLabel>
          <SelectItem value={CryptoMerchType.POSTER}>
            {CryptoMerchType.POSTER}
          </SelectItem>
          <SelectItem value={CryptoMerchType.NOTEBOOK}>
            {CryptoMerchType.NOTEBOOK}
          </SelectItem>
          <SelectItem value={CryptoMerchType.DESK_MAT}>
            {CryptoMerchType.DESK_MAT}
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Crypto-specific</SelectLabel>
          <SelectItem value={CryptoMerchType.HARDWARE_WALLET_CASE}>
            {CryptoMerchType.HARDWARE_WALLET_CASE}
          </SelectItem>
          <SelectItem value={CryptoMerchType.CRYPTO_COIN_REPLICA}>
            {CryptoMerchType.CRYPTO_COIN_REPLICA}
          </SelectItem>
          <SelectItem value={CryptoMerchType.BLOCKCHAIN_ART_PRINT}>
            {CryptoMerchType.BLOCKCHAIN_ART_PRINT}
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Limited Editions</SelectLabel>
          <SelectItem value={CryptoMerchType.SIGNED_WHITEPAPER}>
            {CryptoMerchType.SIGNED_WHITEPAPER}
          </SelectItem>
          <SelectItem value={CryptoMerchType.COMMEMORATIVE_COIN}>
            {CryptoMerchType.COMMEMORATIVE_COIN}
          </SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Digital Products</SelectLabel>
          <SelectItem value={CryptoMerchType.DIGITAL_ASSET_PACK}>
            {CryptoMerchType.DIGITAL_ASSET_PACK}
          </SelectItem>
          <SelectItem value={CryptoMerchType.NFT_ARTWORK}>
            {CryptoMerchType.NFT_ARTWORK}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
