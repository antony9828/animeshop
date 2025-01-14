{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Maintenance.EquipmentInstances where

import AnimeShop.Prelude

type EquipmentInstancesAPI =
  "equipment_instances" :>
  (
    Get '[JSON] [Entity EquipmentInstance] :<|>
    ReqBody '[JSON] EquipmentInstance :> Post '[JSON] (Entity EquipmentInstance)
  )

equipmentInstancesServer :: ServerT EquipmentInstancesAPI App
equipmentInstancesServer = getEquipmentInstances :<|> postEquipmentInstance

getEquipmentInstances :: App [Entity EquipmentInstance]
getEquipmentInstances = runDb $ selectList [] []

postEquipmentInstance :: EquipmentInstance -> App (Entity EquipmentInstance)
postEquipmentInstance = runDb . insertEntity
